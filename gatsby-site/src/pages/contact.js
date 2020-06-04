/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ZoneMap from "../images/ZoneMap2.gif"

const style = css`
  padding: 50px;
  max-width: 1268px;
  margin: 0 auto;
  color: var(--text-black);
  & .zone-map {
    margin: 0 auto;
    display: block;
    width: 100%;
    max-width: 600px;
  }
  & .zones-wrapper {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-bottom: 25px;
  }

  & .zone-1-wrapper,
  & .zone-2-wrapper,
  & .zone-3-wrapper,
  & .zone-4-wrapper {
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    & span {
      margin: 0 auto;
    }

    & .text-title {
      font-size: 1.5rem;
    }
    & .text-main {
      font-size: 1.2rem;
    }
    & .text-secondary {
      font-size: 1rem;
    }
  }
  .zone-1-wrapper {
    background-color: var(--zone-1);
  }
  .zone-2-wrapper {
    background-color: var(--zone-2);
  }
  .zone-3-wrapper {
    background-color: var(--zone-3);
  }
  .zone-4-wrapper {
    background-color: var(--zone-4);
  }
`

const contactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div css={style} className="contact-page-wrapper">
      <div className="flex flex-col">
        <div className="dealer-text mb-10">
          <h1 className="text-base text-center md:text-2xl">
            CONTACT US TO FIND A DEALER NEAR YOU
          </h1>
        </div>
        <div className="contact-section flex flex-col md:flex-row">
          <div className="mb-10 px-4 md:w-1/3">
            <h1 className="text-base text-center md:text-2xl">HOURS OF OPERATION</h1>
            <p className="text-center">
              Monday - Friday 8:00 a.m. to 5:00 p.m. (Mountain Standard Time)
              (Excluding Holidays)
            </p>
          </div>
          <div className="mb-10 px-4 md:w-1/3">
            <h1 className="text-base text-center md:text-2xl">CUSTOMER SERVICE & SALES</h1>
            <p className="text-center">
              Office - (208) 785-6291
              <br />
              Toll Free - (800) 987-7782
              <br />
              Fax - (208) 785-1287
              <br />
              Email - rmpublishing@qwestoffice.net
            </p>
          </div>
          <div className="mb-10 px-4 md:w-1/3">
            <h1 className="text-base text-center md:text-2xl">ADDRESS</h1>
            <p className="text-center">
              Rocky Mountain Publishing
              <br />
              479 Emerald Ave. Blackfoot, ID 83221
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>DROP SHIPPING</h1>
        <p>
          Rocky Mountain Publishing offers this service to your customers who
          would prefer to have their artwork delivered direct to their doorstep.
          We bill you, not the customer. The following chart outlines these
          rates by zone:
        </p>
        <img src={ZoneMap} className="zone-map" alt=""></img>
      </div>
      <div>
        <h2>7x10's & 8x10's</h2>
        <div className="zones-wrapper">
          <div className="zone-1-wrapper">
            <span className="text-title">ZONE 1</span>
            <span className="text-main">$15.00</span>
          </div>
          <div className="zone-2-wrapper">
            <span className="text-title">ZONE 2</span>
            <span className="text-main">$20.00</span>
          </div>
          <div className="zone-3-wrapper">
            <span className="text-title">ZONE 3</span>
            <span className="text-main">$25.00</span>
          </div>
          <div className="zone-4-wrapper">
            <span className="text-title">ZONE 4</span>
            <span className="text-main">$27.00</span>
          </div>
        </div>
        <p className="subtext">
          Price includes up to 3 pieces per box; Charges start over after 3
          pieces.
        </p>
      </div>
      <div>
        <h2>10x20's & 11x15's</h2>
        <div className="zones-wrapper">
          <div className="zone-1-wrapper">
            <span className="text-title">ZONE 1</span>
            <span className="text-main">$20.50</span>
          </div>
          <div className="zone-2-wrapper">
            <span className="text-title">ZONE 2</span>
            <span className="text-main">$25.50</span>
          </div>
          <div className="zone-3-wrapper">
            <span className="text-title">ZONE 3</span>
            <span className="text-main">$29.50</span>
          </div>
          <div className="zone-4-wrapper">
            <span className="text-title">ZONE 4</span>
            <span className="text-main">$31.50</span>
          </div>
        </div>
        <p className="subtext">
          Price includes up to 3 pieces per box; Charges start over after 3
          pieces.
        </p>
      </div>
      <div>
        <h2>16x20's & UP TO 20x24's</h2>
        <div className="zones-wrapper">
          <div className="zone-1-wrapper">
            <span className="text-title">ZONE 1</span>
            <span className="text-main">$23.00 (1st piece)</span>
            <span className="text-secondary">+ $5.00 (2nd piece)</span>
            <span className="text-secondary">+ $5.00 (3rd piece)</span>
          </div>
          <div className="zone-2-wrapper">
            <span className="text-title">ZONE 2</span>
            <span className="text-main">$34.00 (1st piece)</span>
            <span className="text-secondary">+ $5.00 (2nd piece)</span>
            <span className="text-secondary">+ $5.00 (3rd piece)</span>
          </div>
          <div className="zone-3-wrapper">
            <span className="text-title">ZONE 3</span>
            <span className="text-main">$46.00 (1st piece)</span>
            <span className="text-secondary">+ $5.00 (2nd piece)</span>
            <span className="text-secondary">+ $5.00 (3rd piece)</span>
          </div>
          <div className="zone-4-wrapper">
            <span className="text-title">ZONE 4</span>
            <span className="text-main">$51.00 (1st piece)</span>
            <span className="text-secondary">+ $5.00 (2nd piece)</span>
            <span className="text-secondary">+ $5.00 (3rd piece)</span>
          </div>
        </div>
        <p className="subtext">
          Larger sized pieces fit three to a box; after three, the charges start
          over.
        </p>
      </div>
      <div>
        <h2>ANYTHING OVER 20x24</h2>
        <div className="zones-wrapper">
          <div className="zone-1-wrapper">
            <span className="text-title">ZONE 1</span>
            <span className="text-main">$52.00 (1st piece)</span>
            <span className="text-secondary">+ $5.00 (2nd piece)</span>
            <span className="text-secondary">+ $5.00 (3rd piece)</span>
          </div>
          <div className="zone-2-wrapper">
            <span className="text-title">ZONE 2</span>
            <span className="text-main">$64.00 (1st piece)</span>
            <span className="text-secondary">+ $5.00 (2nd piece)</span>
            <span className="text-secondary">+ $5.00 (3rd piece)</span>
          </div>
          <div className="zone-3-wrapper">
            <span className="text-title">ZONE 3</span>
            <span className="text-main">$77.00 (1st piece)</span>
            <span className="text-secondary">+ $5.00 (2nd piece)</span>
            <span className="text-secondary">+ $5.00 (3rd piece)</span>
          </div>
          <div className="zone-4-wrapper">
            <span className="text-title">ZONE 4</span>
            <span className="text-main">$80.00 (1st piece)</span>
            <span className="text-secondary">+ $10.00 (2nd piece)</span>
            <span className="text-secondary">+ $10.00 (3rd piece)</span>
          </div>
        </div>
        <p className="subtext">
          Larger sized pieces fit three to a box; after three, the charges start
          over. **Some DÉCOR pieces can only ship TWO to a box**
        </p>
      </div>
      <div>
        <h1>WHOLESALE ORDERS</h1>
        <p>
          At Rocky Mountain Publishing, we strive to keep our turnaround time
          the quickest possible; we ship within two weeks of receiving your
          order.
        </p>
        <p>
          A $500 minimum order is requested in order to make the shipping costs
          more affordable to you.
        </p>
        <p>
          Orders under $1,200 are shipped via FedEx Ground at the 'cost of
          shipping'. This option can be much more expensive and ranges right
          around a minimum of 20% of the invoice. All orders over $1,200 will
          ship for a flat 10% charge.
        </p>
        <p>
          Additional charges may be applied if the use of a lift gate is needed.
        </p>
      </div>
    </div>
  </Layout>
)

export default contactPage
