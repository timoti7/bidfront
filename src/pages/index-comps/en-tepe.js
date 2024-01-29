import React from "react";

export default function Component() {
  return (
    <>
      <header
        id="header"
        className="header-size-sm"
        style={{
          boxSizing: "border-box",
          display: "block",
          borderBottom: "1px solid rgb(245, 245, 245)",
          position: "relative",
          backgroundColor: "rgb(249, 249, 249)",
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
            className="header-row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              position: "initial",
            }}
          >
            <div
              id="logo"
              className="ml-auto ml-lg-0 mr-lg-auto"
              style={{
                boxSizing: "border-box",
                position: "relative",
                display: "flex",
                alignItems: "center",
                maxHeight: "100%",
                marginLeft: "0px",
                marginRight: "auto",
              }}
            >
              <a
                className="standard-logo"
                href="https://evimola.com/"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  color: "rgb(0, 0, 0)",
                  fontSize: "36px",
                  display: "flex",
                  textDecoration: "none",
                  fontFamily: "signika, sans-serif",
                }}
              >
                <img
                  alt="Canvas Logo"
                  src="https://evimola.com/static/img/logo/evimola/evimola_trans.png"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    border: "none",
                    transition:
                      "height 0.4s ease 0s, padding 0.4s ease 0s, margin 0.4s ease 0s, opacity 0.3s ease 0s",
                    display: "block",
                    maxWidth: "100%",
                    height: "100px",
                    maxHeight: "70px",
                  }}
                />
              </a>
              <a
                className="retina-logo"
                href="https://evimola.com/"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  color: "rgb(0, 0, 0)",
                  fontSize: "36px",
                  display: "none",
                  textDecoration: "none",
                  fontFamily: "signika, sans-serif",
                }}
              >
                <img
                  alt="Canvas Logo"
                  src="https://evimola.com/static/img/logo/evimola/evimola_trans.png"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    border: "none",
                    transition:
                      "height 0.4s ease 0s, padding 0.4s ease 0s, margin 0.4s ease 0s, opacity 0.3s ease 0s",
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    height: "100px",
                  }}
                />
              </a>
            </div>
            <div
              className="header-misc d-none d-lg-flex"
              style={{
                boxSizing: "border-box",
                position: "initial",
                alignItems: "center",
                marginLeft: "15px",
                order: 13,
                display: "flex",
              }}
            >
              <ul
                className="header-extras"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0px",
                }}
              >
                <li
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    overflow: "hidden",
                    listStyle: "none",
                    display: "flex",
                    borderLeft: "0px",
                    marginLeft: "0px",
                    paddingLeft: "0px",
                  }}
                >
                  <i
                    className="i-plain icon-call m-0"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      fontFamily: "font-icons",
                      speak: "none",
                      fontWeight: 400,
                      textTransform: "none",
                      WebkitFontSmoothing: "antialiased",
                      display: "block",
                      cssFloat: "left",
                      cursor: "pointer",
                      fontStyle: "normal",
                      textShadow: "rgb(255, 255, 255) 1px 1px 1px",
                      transition: "all 0.3s ease 0s",
                      color: "rgb(255, 87, 88)",
                      margin: "0px",
                      textAlign: "center",
                      width: "36px",
                      height: "36px",
                      lineHeight: "36px",
                      marginTop: "0px",
                      fontSize: "36px",
                    }}
                  />
                  <div
                    className="he-text"
                    style={{
                      boxSizing: "border-box",
                      paddingLeft: "15px",
                      fontWeight: 300,
                      fontSize: "12px",
                      lineHeight: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "rgb(255, 87, 88)",
                    }}
                  >
                    {"Çağrı Merkezi"}
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0px",
                        color: "rgb(68, 68, 68)",
                      }}
                    >
                      (0)216-3868010
                    </span>
                  </div>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    overflow: "hidden",
                    listStyle: "none",
                    display: "flex",
                    borderLeft: "1px solid rgb(238, 238, 238)",
                    marginLeft: "30px",
                    paddingLeft: "30px",
                  }}
                >
                  <i
                    className="i-plain icon-line2-envelope m-0"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      speak: "none",
                      fontWeight: 400,
                      textTransform: "none",
                      WebkitFontSmoothing: "antialiased",
                      fontFamily: "simple-line-icons",
                      display: "block",
                      cssFloat: "left",
                      cursor: "pointer",
                      fontStyle: "normal",
                      textShadow: "rgb(255, 255, 255) 1px 1px 1px",
                      transition: "all 0.3s ease 0s",
                      color: "rgb(255, 87, 88)",
                      margin: "0px",
                      textAlign: "center",
                      width: "36px",
                      height: "36px",
                      lineHeight: "36px",
                      marginTop: "0px",
                      fontSize: "36px",
                    }}
                  />
                  <div
                    className="he-text"
                    style={{
                      boxSizing: "border-box",
                      paddingLeft: "15px",
                      fontWeight: 300,
                      fontSize: "12px",
                      lineHeight: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "rgb(255, 87, 88)",
                    }}
                  >
                    {"E-Posta"}
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0px",
                        color: "rgb(68, 68, 68)",
                      }}
                    >
                      bilgi@evimola.com
                    </span>
                  </div>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    overflow: "hidden",
                    listStyle: "none",
                    display: "flex",
                    borderLeft: "1px solid rgb(238, 238, 238)",
                    marginLeft: "30px",
                    paddingLeft: "30px",
                  }}
                >
                  <i
                    className="i-plain icon-whatsapp m-0"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      fontFamily: "font-icons",
                      speak: "none",
                      fontWeight: 400,
                      textTransform: "none",
                      WebkitFontSmoothing: "antialiased",
                      display: "block",
                      cssFloat: "left",
                      cursor: "pointer",
                      fontStyle: "normal",
                      textShadow: "rgb(255, 255, 255) 1px 1px 1px",
                      transition: "all 0.3s ease 0s",
                      color: "rgb(255, 87, 88)",
                      margin: "0px",
                      textAlign: "center",
                      width: "36px",
                      height: "36px",
                      lineHeight: "36px",
                      marginTop: "0px",
                      fontSize: "36px",
                    }}
                  />
                  <div
                    className="he-text"
                    style={{
                      boxSizing: "border-box",
                      paddingLeft: "15px",
                      fontWeight: 300,
                      fontSize: "12px",
                      lineHeight: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "rgb(255, 87, 88)",
                    }}
                  >
                    {"Whatsapp Hattı"}
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0px",
                        color: "rgb(68, 68, 68)",
                      }}
                    >
                      (0)534-8937956
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="header-wrap"
          style={{
            boxSizing: "border-box",
            width: "100%",
            transition: "height 0.2s ease 0s, background-color 0.3s ease 0s",
            height: "auto",
            zIndex: 299,
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px",
            backfaceVisibility: "hidden",
            willChange: "left, top, transform",
            backgroundColor: "rgb(255, 255, 255)",
            position: "absolute",
          }}
        >
          <div
            id="navigasyon_menusu"
            className="container"
            style={{
              boxSizing: "border-box",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              marginRight: "auto",
              marginLeft: "auto",
              maxWidth: "1320px",
              height: "50px",
            }}
          >
            <div
              className="header-row justify-content-between flex-row-reverse flex-lg-row justify-content-lg-center top-search-parent"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                position: "initial",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                className="header-misc"
                style={{
                  boxSizing: "border-box",
                  position: "initial",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "15px",
                  order: 13,
                }}
              >
                <div
                  id="top-search"
                  className="header-misc-icon"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 8px",
                    transition: "opacity 0.3s ease 0s",
                  }}
                >
                  <a
                    id="top-search-trigger"
                    href="https://evimola.com/#"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      transition: "color 0.3s ease-in-out 0s",
                      display: "block",
                      position: "relative",
                      width: "20px",
                      height: "20px",
                      fontSize: "1.125rem",
                      lineHeight: "20px",
                      textAlign: "center",
                      color: "rgb(51, 51, 51)",
                      zIndex: 11,
                      textDecoration: "none",
                    }}
                  >
                    <i
                      className="icon-line-search"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        display: "inline-block",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        lineHeight: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        fontFamily: "lined-icons",
                        transition: "opacity 0.3s ease 0s",
                        position: "absolute",
                        top: "0px",
                        left: "3px",
                      }}
                    />
                    <i
                      className="icon-line-cross"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        display: "inline-block",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        lineHeight: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        fontFamily: "lined-icons",
                        transition: "opacity 0.3s ease 0s",
                        position: "absolute",
                        top: "0px",
                        left: "3px",
                        opacity: 0,
                      }}
                    />
                  </a>
                </div>
              </div>
              <div
                id="primary-menu-trigger"
                style={{
                  boxSizing: "border-box",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  width: "50px",
                  height: "50px",
                  lineHeight: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "none",
                  pointerEvents: "none",
                  zIndex: 0,
                  transition: "opacity 0.2s ease 0.2s, top 0.4s ease 0s",
                  opacity: 1,
                }}
              >
                <svg
                  className="svg-trigger"
                  viewBox="0 0 100 100"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    verticalAlign: "middle",
                    transition: "transform 400ms ease 0s",
                    width: "30px",
                    height: "30px",
                    cursor: "pointer",
                    WebkitTapHighlightColor: "transparent",
                    userSelect: "none",
                  }}
                >
                  <path
                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                    style={{
                      boxSizing: "border-box",
                      transition:
                        "stroke-dasharray 400ms ease 0s, stroke-dashoffset 400ms ease 0s",
                      fill: "none",
                      stroke: "rgb(51, 51, 51)",
                      strokeWidth: 5,
                      strokeLinecap: "round",
                      strokeDasharray: "40, 160",
                    }}
                  />
                  <path
                    d="m 30,50 h 40"
                    style={{
                      boxSizing: "border-box",
                      fill: "none",
                      stroke: "rgb(51, 51, 51)",
                      strokeWidth: 5,
                      strokeLinecap: "round",
                      transition: "transform 400ms ease 0s",
                      strokeDasharray: "40, 142",
                      transformOrigin: "50% center",
                    }}
                  />
                  <path
                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                    style={{
                      boxSizing: "border-box",
                      fill: "none",
                      stroke: "rgb(51, 51, 51)",
                      strokeWidth: 5,
                      strokeLinecap: "round",
                      transition:
                        "transform 400ms ease 0s, stroke-dashoffset 400ms ease 0s",
                      strokeDasharray: "40, 85",
                      transformOrigin: "50% center",
                    }}
                  />
                </svg>
              </div>
              <nav
                className="primary-menu with-arrows"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  flex: "0 0 auto",
                  flexBasis: "auto",
                  flexGrow: 0,
                  transition:
                    "padding 0.4s ease 0s, margin 0.4s ease 0s, opacity 0.2s ease 0.2s",
                  opacity: 1,
                }}
              >
                <ul
                  className="menu-container"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <li
                    className="menu-item"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                    }}
                  >
                    <a
                      className="menu-link"
                      href="https://evimola.com/ev-satiyorum/"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        display: "block",
                        lineHeight: "22px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        padding: "39px 15px",
                        transition: "all 0.3s ease 0s",
                        paddingLeft: "17px",
                        paddingRight: "17px",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "rgb(68, 68, 68)",
                        paddingTop: "19px",
                        paddingBottom: "19px",
                        textDecoration: "none",
                        fontFamily: "signika, sans-serif",
                      }}
                    >
                      <div
                        style={{ boxSizing: "border-box", fontSize: "115%" }}
                      >
                        <i
                          className="icon-line2-home"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            speak: "none",
                            fontStyle: "normal",
                            fontWeight: 400,
                            textTransform: "none",
                            lineHeight: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            fontFamily: "simple-line-icons",
                            position: "relative",
                            top: "-1px",
                            fontSize: "0.875rem",
                            width: "16px",
                            textAlign: "center",
                            marginRight: "6px",
                            verticalAlign: "top",
                            color: "rgb(255, 87, 88)",
                          }}
                        />
                        Ev Satıyorum
                      </div>
                    </a>
                  </li>
                  <li
                    className="menu-item sub-menu"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      borderTop: "0px",
                      marginLeft: "2px",
                    }}
                  >
                    <a
                      className="menu-link"
                      href="https://evimola.com/portfoy/istanbul-satilik/"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        display: "block",
                        lineHeight: "22px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        padding: "39px 15px",
                        transition: "all 0.3s ease 0s",
                        paddingLeft: "17px",
                        paddingRight: "17px",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "rgb(68, 68, 68)",
                        paddingTop: "19px",
                        paddingBottom: "19px",
                        textDecoration: "none",
                        fontFamily: "signika, sans-serif",
                      }}
                    >
                      <div
                        style={{ boxSizing: "border-box", fontSize: "115%" }}
                      >
                        <i
                          className="icon-line2-emoticon-smile"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            speak: "none",
                            fontStyle: "normal",
                            fontWeight: 400,
                            textTransform: "none",
                            lineHeight: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            fontFamily: "simple-line-icons",
                            position: "relative",
                            top: "-1px",
                            fontSize: "0.875rem",
                            width: "16px",
                            textAlign: "center",
                            marginRight: "6px",
                            verticalAlign: "top",
                            color: "rgb(255, 87, 88)",
                          }}
                        />
                        Ev Fırsatları
                        <i
                          className="icon-angle-down"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            fontFamily: "font-icons",
                            speak: "none",
                            fontStyle: "normal",
                            fontWeight: 400,
                            textTransform: "none",
                            lineHeight: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            position: "relative",
                            width: "16px",
                            textAlign: "center",
                            verticalAlign: "top",
                            margin: "0px 0px 0px 5px",
                            top: "0px",
                            fontSize: "0.875rem",
                            marginRight: "0px",
                            display: "inline-block",
                          }}
                        />
                      </div>
                    </a>
                    <ul
                      className="sub-menu-container"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        borderTop: "1px solid rgb(238, 238, 238)",
                        listStyle: "none",
                        marginBottom: "0px",
                        borderWidth: "2px 1px 1px",
                        borderStyle: "solid",
                        borderColor:
                          "rgb(26, 188, 156) rgb(238, 238, 238) rgb(238, 238, 238)",
                        borderImage: "initial",
                        position: "absolute",
                        visibility: "hidden",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 13px 42px 11px",
                        top: "100%",
                        left: "0px",
                        borderRadius: "3px",
                        border: "0px",
                        width: "210px",
                        borderTopColor: "initial",
                        backgroundColor: "rgb(0, 24, 56)",
                        transition:
                          "opacity 0.3s ease 0s, margin 0.25s ease 0s",
                        display: "block",
                        opacity: 0,
                        marginTop: "15px",
                        zIndex: -9999,
                        pointerEvents: "none",
                        padding: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <li
                        className="menu-item"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                        }}
                      >
                        <a
                          className="menu-link"
                          href="https://evimola.com/portfoy/istanbul-satilik/"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            display: "block",
                            lineHeight: "22px",
                            textTransform: "uppercase",
                            position: "relative",
                            border: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            padding: "12px 17px",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            fontWeight: 400,
                            paddingRight: "17px",
                            paddingLeft: "17px",
                            color: "rgb(255, 255, 255)",
                            textDecoration: "none",
                            fontFamily: "rubik, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              lineHeight: 0.7,
                            }}
                          >
                            Satılık
                          </div>
                        </a>
                      </li>
                      <li
                        className="menu-item"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          borderTop: "1px dotted rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <a
                          className="menu-link"
                          href="https://evimola.com/portfoy/istanbul-kiralik/"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            display: "block",
                            lineHeight: "22px",
                            textTransform: "uppercase",
                            position: "relative",
                            border: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            padding: "12px 17px",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            fontWeight: 400,
                            paddingRight: "17px",
                            paddingLeft: "17px",
                            color: "rgb(255, 255, 255)",
                            textDecoration: "none",
                            fontFamily: "rubik, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              lineHeight: 0.7,
                            }}
                          >
                            Kiralık
                          </div>
                        </a>
                      </li>
                    </ul>
                    <button
                      className="sub-menu-trigger icon-chevron-right"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        overflow: "visible",
                        appearance: "button",
                        fontVariant: "normal",
                        fontFamily: "font-icons",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        WebkitFontSmoothing: "antialiased",
                        outline: "none",
                        border: "none",
                        background: "none",
                        padding: "0px",
                        transition: "transform 0.3s ease 0s",
                        position: "absolute",
                        cursor: "pointer",
                        top: "9px",
                        right: "0px",
                        width: "32px",
                        height: "32px",
                        fontSize: "12px",
                        lineHeight: "32px",
                        textAlign: "center",
                        display: "none",
                      }}
                    />
                  </li>
                  <li
                    className="menu-item sub-menu"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      borderTop: "0px",
                      marginLeft: "2px",
                    }}
                  >
                    <a
                      className="menu-link"
                      href="https://evimola.com/portfoy/istanbul-satilik/"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        display: "block",
                        lineHeight: "22px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        padding: "39px 15px",
                        transition: "all 0.3s ease 0s",
                        paddingLeft: "17px",
                        paddingRight: "17px",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "rgb(68, 68, 68)",
                        paddingTop: "19px",
                        paddingBottom: "19px",
                        textDecoration: "none",
                        fontFamily: "signika, sans-serif",
                      }}
                    >
                      <div
                        style={{ boxSizing: "border-box", fontSize: "115%" }}
                      >
                        <i
                          className="icon-building2"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            fontFamily: "font-icons",
                            speak: "none",
                            fontStyle: "normal",
                            fontWeight: 400,
                            textTransform: "none",
                            lineHeight: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            position: "relative",
                            top: "-1px",
                            width: "16px",
                            textAlign: "center",
                            marginRight: "6px",
                            verticalAlign: "top",
                            color: "rgb(255, 87, 88)",
                            fontSize: "85%",
                          }}
                        />
                        Arsa/Ticari
                        <i
                          className="icon-angle-down"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            fontFamily: "font-icons",
                            speak: "none",
                            fontStyle: "normal",
                            fontWeight: 400,
                            textTransform: "none",
                            lineHeight: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            position: "relative",
                            width: "16px",
                            textAlign: "center",
                            verticalAlign: "top",
                            margin: "0px 0px 0px 5px",
                            top: "0px",
                            fontSize: "0.875rem",
                            marginRight: "0px",
                            display: "inline-block",
                          }}
                        />
                      </div>
                    </a>
                    <ul
                      className="sub-menu-container"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        borderTop: "1px solid rgb(238, 238, 238)",
                        listStyle: "none",
                        marginBottom: "0px",
                        borderWidth: "2px 1px 1px",
                        borderStyle: "solid",
                        borderColor:
                          "rgb(26, 188, 156) rgb(238, 238, 238) rgb(238, 238, 238)",
                        borderImage: "initial",
                        position: "absolute",
                        visibility: "hidden",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 13px 42px 11px",
                        top: "100%",
                        left: "0px",
                        borderRadius: "3px",
                        border: "0px",
                        width: "210px",
                        borderTopColor: "initial",
                        backgroundColor: "rgb(0, 24, 56)",
                        transition:
                          "opacity 0.3s ease 0s, margin 0.25s ease 0s",
                        display: "block",
                        opacity: 0,
                        marginTop: "15px",
                        zIndex: -9999,
                        pointerEvents: "none",
                        padding: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <li
                        className="menu-item"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                        }}
                      >
                        <a
                          className="menu-link"
                          href="https://evimola.com/portfoy/satilik-arsa/"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            display: "block",
                            lineHeight: "22px",
                            textTransform: "uppercase",
                            position: "relative",
                            border: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            padding: "12px 17px",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            fontWeight: 400,
                            paddingRight: "17px",
                            paddingLeft: "17px",
                            color: "rgb(255, 255, 255)",
                            textDecoration: "none",
                            fontFamily: "rubik, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              lineHeight: 0.7,
                            }}
                          >
                            Satılık Arsa
                          </div>
                        </a>
                      </li>
                      <li
                        className="menu-item"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          borderTop: "1px dotted rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <a
                          className="menu-link"
                          href="https://evimola.com/portfoy/satilik-ticari-gayrimenkul/"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            display: "block",
                            lineHeight: "22px",
                            textTransform: "uppercase",
                            position: "relative",
                            border: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            padding: "12px 17px",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            fontWeight: 400,
                            paddingRight: "17px",
                            paddingLeft: "17px",
                            color: "rgb(255, 255, 255)",
                            textDecoration: "none",
                            fontFamily: "rubik, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              lineHeight: 0.7,
                            }}
                          >
                            Satılık Ticari Mülk
                          </div>
                        </a>
                      </li>
                      <li
                        className="menu-item"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          borderTop: "1px dotted rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <a
                          className="menu-link"
                          href="https://evimola.com/portfoy/kiralik-ticari-gayrimenkul/"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            display: "block",
                            lineHeight: "22px",
                            textTransform: "uppercase",
                            position: "relative",
                            border: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            padding: "12px 17px",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            fontWeight: 400,
                            paddingRight: "17px",
                            paddingLeft: "17px",
                            color: "rgb(255, 255, 255)",
                            textDecoration: "none",
                            fontFamily: "rubik, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              lineHeight: 0.7,
                            }}
                          >
                            Kiralık Ticari Mülk
                          </div>
                        </a>
                      </li>
                    </ul>
                    <button
                      className="sub-menu-trigger icon-chevron-right"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        overflow: "visible",
                        appearance: "button",
                        fontVariant: "normal",
                        fontFamily: "font-icons",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        WebkitFontSmoothing: "antialiased",
                        outline: "none",
                        border: "none",
                        background: "none",
                        padding: "0px",
                        transition: "transform 0.3s ease 0s",
                        position: "absolute",
                        cursor: "pointer",
                        top: "9px",
                        right: "0px",
                        width: "32px",
                        height: "32px",
                        fontSize: "12px",
                        lineHeight: "32px",
                        textAlign: "center",
                        display: "none",
                      }}
                    />
                  </li>
                  <li
                    className="menu-item sub-menu"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      borderTop: "0px",
                      marginLeft: "2px",
                    }}
                  >
                    <a
                      className="menu-link"
                      href="https://evimola.com/#"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        display: "block",
                        lineHeight: "22px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        padding: "39px 15px",
                        transition: "all 0.3s ease 0s",
                        paddingLeft: "17px",
                        paddingRight: "17px",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "rgb(68, 68, 68)",
                        paddingTop: "19px",
                        paddingBottom: "19px",
                        textDecoration: "none",
                        fontFamily: "signika, sans-serif",
                      }}
                    >
                      <div
                        style={{ boxSizing: "border-box", fontSize: "115%" }}
                      >
                        <i
                          className="icon-search2"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            fontFamily: "font-icons",
                            speak: "none",
                            fontStyle: "normal",
                            fontWeight: 400,
                            textTransform: "none",
                            lineHeight: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            position: "relative",
                            top: "-1px",
                            fontSize: "0.875rem",
                            width: "16px",
                            textAlign: "center",
                            marginRight: "6px",
                            verticalAlign: "top",
                            color: "rgb(255, 87, 88)",
                          }}
                        />
                        {"Keşfet"}
                        <i
                          className="icon-angle-down"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            fontFamily: "font-icons",
                            speak: "none",
                            fontStyle: "normal",
                            fontWeight: 400,
                            textTransform: "none",
                            lineHeight: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            position: "relative",
                            width: "16px",
                            textAlign: "center",
                            verticalAlign: "top",
                            margin: "0px 0px 0px 5px",
                            top: "0px",
                            fontSize: "0.875rem",
                            marginRight: "0px",
                            display: "inline-block",
                          }}
                        />
                      </div>
                    </a>
                    <ul
                      className="sub-menu-container"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        borderTop: "1px solid rgb(238, 238, 238)",
                        listStyle: "none",
                        marginBottom: "0px",
                        borderWidth: "2px 1px 1px",
                        borderStyle: "solid",
                        borderColor:
                          "rgb(26, 188, 156) rgb(238, 238, 238) rgb(238, 238, 238)",
                        borderImage: "initial",
                        position: "absolute",
                        visibility: "hidden",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 13px 42px 11px",
                        top: "100%",
                        left: "0px",
                        borderRadius: "3px",
                        border: "0px",
                        width: "210px",
                        borderTopColor: "initial",
                        backgroundColor: "rgb(0, 24, 56)",
                        transition:
                          "opacity 0.3s ease 0s, margin 0.25s ease 0s",
                        display: "block",
                        opacity: 0,
                        marginTop: "15px",
                        zIndex: -9999,
                        pointerEvents: "none",
                        padding: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <li
                        className="menu-item"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                        }}
                      >
                        <a
                          className="menu-link"
                          href="https://evimola.com/rehber/"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            display: "block",
                            lineHeight: "22px",
                            textTransform: "uppercase",
                            position: "relative",
                            border: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            padding: "12px 17px",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            fontWeight: 400,
                            paddingRight: "17px",
                            paddingLeft: "17px",
                            color: "rgb(255, 255, 255)",
                            textDecoration: "none",
                            fontFamily: "rubik, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              lineHeight: 0.7,
                            }}
                          >
                            Rehber
                          </div>
                        </a>
                      </li>
                      <li
                        className="menu-item"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          borderTop: "1px dotted rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <a
                          className="menu-link"
                          href="https://evimola.com/blog/"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            display: "block",
                            lineHeight: "22px",
                            textTransform: "uppercase",
                            position: "relative",
                            border: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            padding: "12px 17px",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            fontWeight: 400,
                            paddingRight: "17px",
                            paddingLeft: "17px",
                            color: "rgb(255, 255, 255)",
                            textDecoration: "none",
                            fontFamily: "rubik, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              lineHeight: 0.7,
                            }}
                          >
                            Blog
                          </div>
                        </a>
                      </li>
                      <li
                        className="menu-item"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          borderTop: "1px dotted rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <a
                          className="menu-link"
                          href="https://evimola.com/bilgi/hakkimizda"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            display: "block",
                            lineHeight: "22px",
                            textTransform: "uppercase",
                            position: "relative",
                            border: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            padding: "12px 17px",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            fontWeight: 400,
                            paddingRight: "17px",
                            paddingLeft: "17px",
                            color: "rgb(255, 255, 255)",
                            textDecoration: "none",
                            fontFamily: "rubik, sans-serif",
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              lineHeight: 0.7,
                            }}
                          >
                            Evimola Hakkında
                          </div>
                        </a>
                      </li>
                    </ul>
                    <button
                      className="sub-menu-trigger icon-chevron-right"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        overflow: "visible",
                        appearance: "button",
                        fontVariant: "normal",
                        fontFamily: "font-icons",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        WebkitFontSmoothing: "antialiased",
                        outline: "none",
                        border: "none",
                        background: "none",
                        padding: "0px",
                        transition: "transform 0.3s ease 0s",
                        position: "absolute",
                        cursor: "pointer",
                        top: "9px",
                        right: "0px",
                        width: "32px",
                        height: "32px",
                        fontSize: "12px",
                        lineHeight: "32px",
                        textAlign: "center",
                        display: "none",
                      }}
                    />
                  </li>
                  <li
                    id="ekspertiz_butonu"
                    className="menu-item"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      borderTop: "0px",
                      marginLeft: "2px",
                    }}
                  >
                    <a
                      className="button button-small button-circle button-red"
                      href="https://evimola.com/evimin-guncel-degeri/"
                      style={{
                        boxSizing: "border-box",
                        outline: "none",
                        whiteSpace: "nowrap",
                        margin: "5px",
                        border: "none",
                        display: "inline-block",
                        position: "relative",
                        cursor: "pointer",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        textShadow: "rgba(0, 0, 0, 0.2) 1px 1px 1px",
                        padding: "7px 17px",
                        fontSize: "12px",
                        lineHeight: "20px",
                        backgroundColor: "rgb(255, 87, 88)",
                        transition: "all 0.2s ease-in-out 0s",
                        borderRadius: "17px",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Ücretsiz Ekspertiz
                    </a>
                  </li>
                </ul>
              </nav>
              <form
                className="top-search-form"
                action="/ara/"
                method="get"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  margin: "0px",
                  transition: "opacity 0.3s ease-in-out 0s",
                  opacity: 0,
                  zIndex: -2,
                  pointerEvents: "none",
                  position: "absolute",
                  height: "100%",
                  marginBottom: "0px",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                }}
              >
                <input
                  className="form-control"
                  name="q"
                  type="text"
                  autoComplete="off"
                  placeholder="İlan numarası, şehir, ilçe ya da semt yazıp, enter'a basın..."
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    overflow: "visible",
                    transition:
                      "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                    display: "block",
                    width: "100%",
                    lineHeight: 1.5,
                    backgroundClip: "padding-box",
                    borderRadius: "0px",
                    border: "0px",
                    padding: "10px 80px 10px 0px",
                    height: "100%",
                    color: "rgb(51, 51, 51)",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    marginLeft: "15px",
                    outline: "0px",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    marginTop: "0px",
                    fontFamily: "signika, sans-serif",
                    fontSize: "90%",
                  }}
                />
              </form>
            </div>
          </div>
        </div>
        <div
          className="header-wrap-clone"
          style={{ boxSizing: "border-box", display: "block", height: "50px" }}
        />
      </header>
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
