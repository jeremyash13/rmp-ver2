import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import ArtContainer from "./state/ArtContainer"
import axios from "axios"

export default function AddNewFrameForm() {
  const GlobalState = ArtContainer.useContainer()
  const url = GlobalState.getFramesUrl
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [selectValue, setSelectValue] = useState(null)

  const uploadImage = async () => {
    const s3Url = GlobalState.s3Url

    const formData = new FormData()
    formData.append("file", file)
    formData.append("name", fileName)

    const response = await fetch(s3Url, {
      method: "POST",
      body: formData,
    })
    const json = await response.json()
    return json.location
  }

  return (
    <div className="w-1/2">
      <Formik
        initialValues={{
          title: "",
          line: "",
          src: "",
        }}
        onSubmit={async values => {
          await uploadImage().then(async location => {
            // submit new entry to database

            await new Promise((resolve, reject) => {
              const newValues = {
                title: values.title,
                line: selectValue,
                src: location,
              }
              axios
                .post(url, newValues)
                .then(json => {
                  resolve(json)
                  console.log(json)
                })
                .catch(err => {
                  console.log(err)
                })
            })
          })
        }}
      >
        <Form enctype="multipart/form-data">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              placeholder=""
              className="bg-light-light-gray rounded px-4 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="line">Line</label>
            <select
              id="line"
              name="line"
              type="select"
              className="bg-light-light-gray rounded px-4 py-2"
              onChange={e => setSelectValue(e.target.value)}
            >
              <option value="standard">Standard</option>
              <option value="decor">Decor</option>
            </select>
          </div>
          <div className="mt-6 flex justify-between">
            <input
              id="file"
              name="file"
              type="file"
              accept="image/png"
              className="bg-light-light-gray rounded px-4 py-2"
              encType="multipart/form-data"
              onChange={e => {
                setFile(e.target.files[0])
                setFileName(e.target.files[0].name)
              }}
            />
            <button
              type="submit"
              className="hover:bg-mint-green hover:text-white rounded px-4 py-2 border border-blackish hover:border-transparent"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
