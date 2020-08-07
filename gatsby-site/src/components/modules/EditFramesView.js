import React, { useState, useEffect } from "react"
import QuickViewClose from "../QuickViewClose"
import ArtContainer from "../state/ArtContainer"
import axios from "axios"
import AddNewFrameForm from "../AddNewFrameForm"

import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "shards-react"

export default function EditFramesView({ closeHandler }) {
  const GlobalState = ArtContainer.useContainer()
  const [refreshFrames, setRefreshFrames] = useState(0)
  const [frames, setFrames] = useState([
    {
      title: "",
      line: "",
      src: "",
    },
  ])
  const [framesLoading, setFramesLoading] = useState(false)

  const deleteFrame = id => {
    const deleteFrameUrl = GlobalState.deleteFramesUrl
    axios
      .post(deleteFrameUrl, {
        id: id,
      })
      .then(json => {
        console.log(json.data.msg)
      })
      .then(() => {
        setRefreshFrames(prevState => prevState + 1)
      })
  }

  const fetchFrames = () => {
    const url = GlobalState.getFramesUrl
    setFramesLoading(true)

    axios({
      method: "GET",
      url: url,
    })
      .then(json => {
        setFrames(json.data)
        setFramesLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchFrames()
  }, [refreshFrames])

  return (
    <div className="bg-white w-full h-screen p-4 fixed z-30 inset-0">
      <div className="w-8 cursor-pointer ml-auto">
        <QuickViewClose clickHandler={closeHandler} />
      </div>
      <Container>
        <Row>
          <Col>FRAMES</Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {frames.map((item, index) => {
                if (item.line.toLowerCase() === "standard") {
                  return (
                    <div className="relative">
                      {/* <div
                        className="absolute cursor-pointer bg-error-red inset-0 rounded px-2 py-1 text-white opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out text-center"
                        onClick={() => {
                          deleteFrame(item._id)
                        }}
                      >
                        Delete?
                      </div> */}
                      <ListGroupItem
                        // className="border border-blackish rounded px-2 py-1 mb-2 min-w-md"
                        key={item._id}
                      >
                        {`#${item.title}`}
                      </ListGroupItem>
                    </div>
                  )
                }
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
