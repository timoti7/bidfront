import React from "react";

export default function Component() {
  return (
    <>
      <div
        id="copyrights"
        style={{
          boxSizing: "border-box",
          padding: "40px 0px",
          fontSize: "0.875rem",
          lineHeight: 1.8,
          color: "rgba(255, 255, 255, 0.4)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
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
          }}
        >
          <div
            className="row justify-content-between col-mb-30"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginRight: "-15px",
              marginLeft: "-15px",
              marginBottom: "-40px",
              justifyContent: "space-between",
            }}
          >
            <div
              className="col-12 col-md-auto text-center text-md-left"
              style={{
                boxSizing: "border-box",
                position: "relative",
                paddingRight: "15px",
                paddingLeft: "15px",
                flex: "0 0 auto",
                width: "auto",
                maxWidth: "100%",
                paddingBottom: "30px",
                textAlign: "left",
              }}
            >
              {
                "Copyrights © 2021 - Bu sitenin tüm Hakları TVİ Gayrimenkul Danışmanlık ve Pazarlama Ltd. Şti.'ne aittir."
              }
            </div>
          </div>
        </div>
      </div>
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
