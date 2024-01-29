import React from "react";

export default function Component() {
  return (
    <>
      <section
        id="slider"
        className="slider-element bg-color"
        style={{
          boxSizing: "border-box",
          display: "block",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          backgroundColor: "rgb(255, 87, 88)",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1320px",
            position: "relative",
            height: "100%",
          }}
        >
          <div
            className="row h-100"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginRight: "-15px",
              marginLeft: "-15px",
              height: "100%",
            }}
          >
            <div
              className="col-lg-12 offset-lg-3 d-flex align-self-center flex-column pt-4 pb-0 py-lg-12 mb-0 my-lg-4"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                flex: "0 0 100%",
                maxWidth: "100%",
                marginLeft: "25%",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                paddingBottom: "0px",
                paddingTop: "1.5rem",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2
                className="display-4"
                style={{
                  boxSizing: "border-box",
                  margin: "0px 0px 30px",
                  color: "rgb(68, 68, 68)",
                  marginTop: "0px",
                  marginBottom: "30px",
                  lineHeight: 1.2,
                  fontWeight: 800,
                  fontSize: "240%",
                  fontFamily: "signika, sans-serif",
                }}
              >
                {" "}
                Daha{" "}
                <span
                  id="changeText"
                  style={{
                    boxSizing: "border-box",
                    color: "white",
                    opacity: 1,
                  }}
                >
                  Kolay
                </span>{" "}
                Ev Satmanın{" "}
                <span style={{ boxSizing: "border-box", color: "white" }}>
                  Yeni
                </span>{" "}
                Yolu.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  background-color: rgb(255, 255, 255);
  line-height: 1.5;
  color: rgb(85, 85, 85);
  font-family: roboto, sans-serif;
}
`,
        }}
      />
    </>
  );
}
