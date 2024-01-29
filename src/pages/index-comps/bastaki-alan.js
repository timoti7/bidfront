import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="container clearfix"
        style={{
          boxSizing: "border-box",
          width: "100%",
          paddingRight: "15px",
          paddingLeft: "15px",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "1320px",
          position: "relative",
        }}
      >
        <div
          className="row align-items-center col-mb-50"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            marginRight: "-15px",
            marginLeft: "-15px",
            marginBottom: "-50px",
            alignItems: "center",
          }}
        >
          <div
            className="col-md-12 col-sm-12 col-lg-5"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 41.6667%",
              maxWidth: "41.6667%",
              paddingBottom: "50px",
            }}
          >
            <img
              className="rounded"
              alt="Çok Daha Fazlası"
              src="https://evimola.com/static/resimler/ofis_toplantisi.jpg"
              style={{
                boxSizing: "border-box",
                borderStyle: "none",
                verticalAlign: "middle",
                maxWidth: "100%",
                width: "600px",
                height: "auto",
                borderRadius: "0.25rem",
              }}
            />
          </div>
          <div
            className="col-lg-7 text-md-left col-md-12"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 58.3333%",
              maxWidth: "58.3333%",
              paddingBottom: "50px",
              textAlign: "left",
            }}
          >
            <div
              className="heading-block border-bottom-0"
              style={{
                boxSizing: "border-box",
                marginBottom: "50px",
                borderBottom: "0px",
              }}
            >
              <h4
                style={{
                  boxSizing: "border-box",
                  margin: "0px 0px 30px",
                  lineHeight: 1.5,
                  marginTop: "0px",
                  marginBottom: "0px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "rgb(51, 51, 51)",
                  fontWeight: 700,
                  fontSize: "135%",
                  fontFamily: "signika, sans-serif",
                }}
              >
                İlan vermekten ve branda asmaktan çok daha fazlası.
              </h4>
              <span
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.25rem",
                  display: "block",
                  marginTop: "10px",
                  color: "rgb(119, 119, 119)",
                  marginLeft: "0px",
                  marginBottom: "-24px",
                  fontWeight: 500,
                }}
              >
                Zaman kaybetmeyin. Sadece ilan vermek ve branda asmak artık sizi
                istediğiniz sonuca götürmez.
              </span>
            </div>
            <p
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                marginBottom: "30px",
                lineHeight: 1.8,
              }}
            >
              Eviniz gibi pek çok ev aynı anda satışı bekliyor. Evinizi en hızlı
              şekilde en iyi fiyata satmak, geniş bir müşteri tabanı gerektirir.
              Bu müşteri tabanı 11 yıllık deneyimizle Evimola'da var.
            </p>
            <p
              style={{
                boxSizing: "border-box",
                marginBottom: "30px",
                lineHeight: 1.8,
                marginTop: "-16px",
              }}
            >
              {`Dijital çağa uymak, kalabalık ofislerde tek başına çalışmaktan ya da hala eski moda yöntemlerle ev satmaya çabalamaktan fazlasını gerektiriyor. İşte tam bu noktada Evimola hizmetinizde.
Bizi diğerlerinden ayıran farkları görmek için`}
              <a
                href="https://evimola.com/#farkimiz"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  color: "rgb(255, 87, 88)",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <u style={{ boxSizing: "border-box" }}>buraya tıklayın.</u>
              </a>
            </p>
          </div>
        </div>
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <div
          className="mx-auto center clearfix"
          style={{
            boxSizing: "border-box",
            maxWidth: "900px",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
            cssFloat: "none",
          }}
        >
          <h1
            style={{
              boxSizing: "border-box",
              margin: "0px 0px 30px",
              color: "rgb(68, 68, 68)",
              fontWeight: 600,
              lineHeight: 1.5,
              marginTop: "0px",
              marginBottom: "30px",
              fontSize: "36px",
              fontFamily: "signika, sans-serif",
            }}
          >
            Evimola ile evinizi satmak çok kolay.
          </h1>
          <h2
            style={{
              boxSizing: "border-box",
              margin: "0px 0px 30px",
              color: "rgb(68, 68, 68)",
              lineHeight: 1.5,
              marginTop: "0px",
              marginBottom: "30px",
              fontSize: "140%",
              fontWeight: 450,
              fontFamily: "signika, sans-serif",
            }}
          >
            Hemen formu doldurun,{" "}
            <span style={{ boxSizing: "border-box", color: "rgb(68, 68, 68)" }}>
              ücretsiz
            </span>{" "}
            rayiç bedel çalışması ile evinizin güncel fiyatını belirleyelim.{" "}
          </h2>
          <a
            className="button button-3d button-large btton-red"
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
              color: "rgb(255, 255, 255)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              textShadow: "rgba(0, 0, 0, 0.2) 1px 1px 1px",
              padding: "8px 26px",
              fontSize: "1rem",
              lineHeight: "30px",
              borderRadius: "3px",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px -3px 0px inset",
              backgroundColor: "rgb(255, 87, 88)",
              transition: "all 0.2s ease-in-out 0s",
              textDecoration: "none",
            }}
          >
            Ücretsiz Ekspertiz İstiyorum
          </a>
        </div>
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <div
          className="row"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            marginRight: "-15px",
            marginLeft: "-15px",
          }}
        >
          <div
            className="col-lg-4 mb-4"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 33.3333%",
              maxWidth: "33.3333%",
              marginBottom: "1.5rem",
            }}
          >
            <div
              className="flip-card text-center"
              style={{
                boxSizing: "border-box",
                transformStyle: "preserve-3d",
                perspective: "1000px",
                textAlign: "center",
              }}
            >
              <div
                className="flip-card-front dark"
                style={{
                  boxSizing: "border-box",
                  backgroundPosition: "center center",
                  transition:
                    "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1) 0s, -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1) 0s",
                  borderRadius: "6px",
                  backgroundSize: "cover",
                  backfaceVisibility: "hidden",
                  width: "100%",
                  height: "280px",
                  color: "rgb(255, 255, 255)",
                  fontSize: "1.5rem",
                  transform: "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                  backgroundImage:
                    'url("https://evimola.com/static/resimler/evimola_panel.jpg")',
                }}
              >
                <div
                  className="flip-card-inner"
                  style={{
                    padding: "2rem",
                    outline: "transparent solid 1px",
                    transform: "translateY(-50%) translateZ(60px) scale(0.94)",
                    top: "50%",
                    position: "absolute",
                    left: "0px",
                    width: "100%",
                    boxSizing: "border-box",
                    perspective: "inherit",
                    zIndex: 2,
                  }}
                >
                  <div
                    className="card bg-transparent border-0 text-center"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "0.25rem",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      minWidth: "0px",
                      overflowWrap: "break-word",
                      backgroundClip: "border-box",
                      backgroundColor: "transparent",
                      border: "0px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        boxSizing: "border-box",
                        flex: "1 1 auto",
                        padding: "1.25rem",
                        minHeight: "1px",
                      }}
                    >
                      <i
                        className="icon-building1 h1"
                        style={{
                          boxSizing: "border-box",
                          marginBottom: "0.5rem",
                          fontSize: "2.5rem",
                          fontVariant: "normal",
                          display: "inline-block",
                          fontFamily: "font-icons",
                          speak: "none",
                          fontStyle: "normal",
                          fontWeight: 400,
                          textTransform: "none",
                          lineHeight: "inherit",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      />
                      <h3
                        className="card-title"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px 0px 30px",
                          fontWeight: 600,
                          lineHeight: 1.5,
                          marginTop: "0px",
                          fontSize: "1.5rem",
                          marginBottom: "0.75rem",
                          color: "rgb(238, 238, 238)",
                          fontFamily: "signika, sans-serif",
                        }}
                      >
                        İçiniz rahat etsin
                      </h3>
                      <p
                        className="card-text font-weight-normal"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          position: "relative",
                          fontSize: "1rem",
                          marginBottom: "0px",
                          color: "rgba(255, 255, 255, 0.95)",
                          lineHeight: 1.8,
                          fontWeight: 400,
                        }}
                      >
                        Bizi yetkilendirin, satışın her adımında içiniz rahat
                        etsin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flip-card-back bg-danger no-after"
                style={{
                  boxSizing: "border-box",
                  backgroundPosition: "center center",
                  transition:
                    "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1) 0s, -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1) 0s",
                  borderRadius: "6px",
                  backgroundSize: "cover",
                  backfaceVisibility: "hidden",
                  height: "280px",
                  color: "rgb(255, 255, 255)",
                  fontSize: "1.5rem",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  transform: "rotateY(180deg)",
                  transformStyle: "preserve-3d",
                  backgroundColor: "rgb(255, 87, 88)",
                }}
              >
                <div
                  className="flip-card-inner"
                  style={{
                    padding: "2rem",
                    outline: "transparent solid 1px",
                    transform: "translateY(-50%) translateZ(60px) scale(0.94)",
                    top: "50%",
                    position: "absolute",
                    left: "0px",
                    width: "100%",
                    boxSizing: "border-box",
                    perspective: "inherit",
                    zIndex: 2,
                  }}
                >
                  <p
                    className="mb-2 text-white"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      position: "relative",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      marginBottom: "0.5rem",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Size satış sürecinin her adımını raporluyoruz. Panelinizden
                    ziyaretçi sayılarını, müşteri geri dönüşlerini görebilir,
                    bizimle paneliniz üzerinden iletişimde kalabilirsiniz.
                    Evinizin satışını görüşmek için bizi hemen arayın!
                  </p>
                  <a
                    href="tel:02163868010"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      color: "rgb(68, 68, 68)",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    <button
                      className="btn btn-outline-light mt-2"
                      type="button"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        fontFamily: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        appearance: "button",
                        border: "1px solid transparent",
                        padding: "0.375rem 0.75rem",
                        borderRadius: "0.25rem",
                        transition:
                          "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                        display: "inline-block",
                        fontWeight: 400,
                        textAlign: "center",
                        verticalAlign: "middle",
                        userSelect: "none",
                        backgroundColor: "transparent",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        borderColor: "rgb(248, 249, 250)",
                        color: "rgb(248, 249, 250)",
                        cursor: "pointer",
                        marginTop: "0.5rem",
                      }}
                    >
                      Çağrı Merkezi: 0216-386 8010
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 mb-7 offset-lg-1 offset-mb-1"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 58.3333%",
              maxWidth: "58.3333%",
              marginLeft: "8.33333%",
            }}
          >
            <h3
              className="display-4 mb-4 font-weight-bold"
              style={{
                boxSizing: "border-box",
                margin: "0px 0px 30px",
                color: "rgb(68, 68, 68)",
                marginTop: "0px",
                fontSize: "3.5rem",
                lineHeight: 1.2,
                fontFamily: "signika, sans-serif",
                marginBottom: "1.5rem",
                fontWeight: 700,
              }}
            >
              Her Şey Elinizin Altında
            </h3>
            <p
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                marginBottom: "30px",
                lineHeight: 1.8,
              }}
            >
              Evimola'yı satış için yetkilendirdiğinizde, tüm satış ve pazarlama
              sürecini panelinizden adım adım izleyebilirsiniz. Evimola ile
              kontrol hep sizde olur. Verilen ilanların bağlantılarına
              erişebilir, ziyaretçi sayılarını ve genel müşteri geri dönüşlerini
              öğrenebilirsiniz.
            </p>
            <p
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                marginBottom: "30px",
                lineHeight: 1.8,
              }}
            >
              Evimolaya{" "}
              <a
                href="https://evimola.com/uye/uyeol/"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  color: "rgb(68, 68, 68)",
                  textDecoration: "none",
                }}
              >
                <u style={{ boxSizing: "border-box" }}>üye olarak</u>
              </a>{" "}
              ya da üyeyseniz{" "}
              <a
                href="https://evimola.com/uye/giris/"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  color: "rgb(68, 68, 68)",
                  textDecoration: "none",
                }}
              >
                <u style={{ boxSizing: "border-box" }}>üye girişi yaparak</u>
              </a>{" "}
              yaparak panelinizi kullanmaya başlayabilirsiniz
            </p>
          </div>
        </div>
        <div
          className="section py-6 my-6"
          style={{
            boxSizing: "border-box",
            margin: "60px 0px",
            padding: "60px 0px",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            backgroundColor: "rgba(191, 213, 219, 0.67)",
            marginTop: "5rem",
            marginBottom: "5rem",
            paddingTop: "5rem",
            paddingBottom: "5rem",
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
              zIndex: 2,
              position: "relative",
            }}
          >
            <div
              className="row align-items-center col-mb-50"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexWrap: "wrap",
                marginRight: "-15px",
                marginLeft: "-15px",
                marginBottom: "-50px",
                alignItems: "center",
              }}
            >
              <div
                className="col-md-4 offset-md-1"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  flex: "0 0 33.3333%",
                  maxWidth: "33.3333%",
                  marginLeft: "8.33333%",
                  paddingBottom: "50px",
                }}
              >
                <img
                  alt="Doc Image"
                  src="https://evimola.com/static/resimler/hedef12.png"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                  }}
                />
              </div>
              <div
                className="col-md-6 offset-md-1"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  flex: "0 0 50%",
                  maxWidth: "50%",
                  marginLeft: "8.33333%",
                  paddingBottom: "50px",
                }}
              >
                <h2
                  className="display-4 mb-4 font-weight-bold"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 30px",
                    color: "rgb(68, 68, 68)",
                    marginTop: "0px",
                    fontSize: "3.5rem",
                    lineHeight: 1.2,
                    fontFamily: "signika, sans-serif",
                    marginBottom: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  İddia ediyoruz!
                </h2>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "30px",
                    lineHeight: 1.8,
                  }}
                >
                  700 bini aşkın e-posta ve telefon müşteri veritabanımızla,
                  evinizi mümkün olan en iyi fiyatla, en hızlı şekilde
                  satacağımızı iddia ediyoruz.{" "}
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "30px",
                    lineHeight: 1.8,
                  }}
                >
                  {
                    "Evimora uzmanlığıyla, evinizi dört kolay adımda hedeflediğiniz süre ve fiyata satmak için bizi"
                  }
                  <a
                    href="https://evimola.com/#iletisim_kutulari"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      color: "rgb(68, 68, 68)",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    hemen arayın
                  </a>{" "}
                  ya da Evimola satış süreci hakkında daha fazla bilgi için
                  aşağıdaki linke tıklayın.
                </p>
                <div
                  className="pricing-action"
                  style={{ boxSizing: "border-box", padding: "1.25rem 0px" }}
                >
                  <a
                    className="btn btn-danger"
                    href="https://evimola.com/satis-sureci/"
                    style={{
                      boxSizing: "border-box",
                      border: "1px solid transparent",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "0.25rem",
                      transition:
                        "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                      display: "inline-block",
                      fontWeight: 400,
                      textAlign: "center",
                      verticalAlign: "middle",
                      userSelect: "none",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      borderColor: "rgb(255, 87, 88)",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(255, 87, 88)",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <i
                      className="icon-line-paper"
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
                      }}
                    />{" "}
                    Evimola Ev Satış Süreci
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br style={{ boxSizing: "border-box" }} />
        <div
          className="line"
          style={{
            boxSizing: "border-box",
            margin: "4rem 0px",
            borderTop: "1px solid rgb(238, 238, 238)",
            clear: "both",
            position: "relative",
            width: "100%",
            marginTop: "-20px",
            marginBottom: "90px",
          }}
        />
        <div
          className="row align-items-center col-mb-50"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            marginRight: "-15px",
            marginLeft: "-15px",
            marginBottom: "-50px",
            alignItems: "center",
          }}
        >
          <div
            className="col-md-12 col-sm-12 col-lg-6 order-lg-last order-md-first order-sm-first"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 50%",
              maxWidth: "50%",
              order: 13,
              paddingBottom: "50px",
            }}
          >
            <img
              className="rounded"
              alt="Ev Satmak"
              src="https://evimola.com/static/resimler/sosyalmedya2.png"
              style={{
                boxSizing: "border-box",
                borderStyle: "none",
                verticalAlign: "middle",
                maxWidth: "100%",
                width: "530px",
                height: "auto",
                marginLeft: "10px",
                borderRadius: "0.25rem",
              }}
            />
          </div>
          <div
            className="col-md-12 col-sm-12 col-lg-6 text-md-left"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 50%",
              maxWidth: "50%",
              paddingBottom: "50px",
              marginBottom: "-25px",
              marginTop: "0px",
              textAlign: "left",
            }}
          >
            <div
              className="heading-block border-bottom-0"
              style={{
                boxSizing: "border-box",
                marginBottom: "24px",
                borderBottom: "0px",
              }}
            >
              <h4
                style={{
                  boxSizing: "border-box",
                  margin: "0px 0px 30px",
                  lineHeight: 1.5,
                  marginTop: "0px",
                  marginBottom: "0px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "rgb(51, 51, 51)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  fontFamily: "signika, sans-serif",
                }}
              >
                Evinizi Satmak İçin Hep Aynı Şeyleri Yaparak, Farklı Sonuçlar
                Beklemeyin!
              </h4>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  marginTop: "10px",
                  fontWeight: 300,
                  color: "rgb(119, 119, 119)",
                  marginLeft: "0px",
                  textAlign: "justify",
                  fontSize: "1rem",
                }}
              >
                Evinizi satmaya karar verdiniz. İlk iş, siz ya da gayrimenkul
                danışmanınız bir branda asıp, ilan sitelerinden birine ilan
                verdiniz ama istediğiniz sonuca ulaşamadınız. Dijital pazarlama
                adı altında kısıtlı çevrelere yapılan cılız sosyal medya
                tanıtımları da fayda etmedi. Üstelik eviniz, ulaşabildiğiniz
                alıcı kitlenin gözünde satılamayan mülk durumuna düştü ve satışı
                iyice zorlaştı. Brandası soldu, ilanı eskidi ve sizin de
                ümidiniz tükendi. Sonuç olarak, hedeflediğiniz para elinize
                geçmedi ve siz, hem zaman, hem de para kaybettiniz.{" "}
              </span>
            </div>
            <div
              className="heading-block border-bottom-0"
              style={{
                boxSizing: "border-box",
                marginBottom: "50px",
                borderBottom: "0px",
              }}
            >
              <h4
                style={{
                  boxSizing: "border-box",
                  margin: "0px 0px 30px",
                  lineHeight: 1.5,
                  marginTop: "0px",
                  marginBottom: "0px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "rgb(51, 51, 51)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  fontFamily: "signika, sans-serif",
                }}
              >
                Değerine ve Hızlı Satış için Evimola’ya Güvenin!
              </h4>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  marginTop: "10px",
                  fontWeight: 300,
                  color: "rgb(119, 119, 119)",
                  marginLeft: "0px",
                  textAlign: "justify",
                  fontSize: "1rem",
                }}
              >
                {
                  "Artık evinizi hedeflediğiniz fiyata kısa sürede satmak mümkün. Çünkü Evimola size Türkiye’nin en kapsamlı pazarlama ağlarından birini sunuyor. Evimola, diğer danışmanlık firmalarının verdiği tüm hizmetlerin ötesinde, tamamı izinli, 700 binin üzerinde kayıtlı iletişim adresi, geniş sosyal medya ağı ile evinizi kimsenin kolay ulaşamayacağı kitlelere tanıtır. Bu sayede, Evimola evinizi hedeflediğiniz fiyata en hızlı şekilde satarken, siz de kısa zamanda kazançlı çıkmanın keyfini yaşarsınız."
                }
              </span>
            </div>
          </div>
        </div>
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <div
          id="farkimiz"
          className="fancy-title title-border title-center"
          style={{
            boxSizing: "border-box",
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h3
            style={{
              boxSizing: "border-box",
              margin: "0px 0px 30px",
              color: "rgb(68, 68, 68)",
              fontWeight: 600,
              lineHeight: 1.5,
              marginTop: "0px",
              fontSize: "1.5rem",
              position: "relative",
              marginBottom: "0px",
              fontFamily: "signika, sans-serif",
            }}
          >
            Evimola ve Diğer Danışmanlık Firmaları
          </h3>
        </div>
        <div
          className="row pricing col-mb-30 mb-4"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            marginRight: "-15px",
            marginLeft: "-15px",
            position: "relative",
            marginBottom: "1.5rem",
          }}
        >
          <div
            className="col-md-6 col-lg-6"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 50%",
              maxWidth: "50%",
              paddingBottom: "30px",
              marginTop: "1.25rem",
            }}
          >
            <div
              className="pricing-box pricing-simple px-5 py-4 bg-light text-center text-md-left"
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                borderRadius: "3px",
                position: "relative",
                border: "0px",
                backgroundColor: "rgb(248, 249, 250)",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingRight: "3rem",
                paddingLeft: "3rem",
                textAlign: "left",
              }}
            >
              <div
                className="pricing-title"
                style={{
                  boxSizing: "border-box",
                  padding: "1rem 0px",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.075)",
                  letterSpacing: "1px",
                  border: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <h3
                  style={{
                    boxSizing: "border-box",
                    lineHeight: 1.5,
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                    fontSize: "180%",
                    color: "rgb(255, 87, 88)",
                    fontFamily: "signika, sans-serif",
                  }}
                >
                  Evimola
                </h3>
              </div>
              <div
                className="pricing-features"
                style={{
                  boxSizing: "border-box",
                  borderTop: "1px solid rgba(0, 0, 0, 0.075)",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.075)",
                  padding: "2rem 0px",
                  border: "0px",
                  backgroundColor: "transparent",
                  marginTop: "-8px",
                }}
              >
                <ul
                  className="iconlist"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    paddingLeft: "0px",
                    margin: "0px",
                    listStyle: "none",
                    marginTop: "0px",
                    marginBottom: "0px",
                    marginLeft: "0px",
                    listStyleType: "none",
                  }}
                >
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Geniş izinli e-posta ve sms veritabanı{" "}
                    </strong>
                    (700 bini aşkın){" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Kesintisiz, kapsamlı çağrı merkezi desteği
                    </strong>{" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Çevrimiçi raporlama
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Çevrimiçi iletişim paneli{" "}
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Fotoğraf çekimi
                    </strong>{" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Önde gelen tüm sitelerde listeleme
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Bölge uzmanlığı
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Uzman danışman tarafından yer gösterimi
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Danışman bazında destek
                    </strong>{" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Danışman bazında müşteri tabanına tanıtım
                    </strong>
                  </li>
                </ul>
              </div>
              <div
                className="pricing-action"
                style={{ boxSizing: "border-box", padding: "1.25rem 0px" }}
              >
                <a
                  className="btn btn-danger btn-lg"
                  href="https://evimola.com/evimin-guncel-degeri/"
                  style={{
                    boxSizing: "border-box",
                    border: "1px solid transparent",
                    transition:
                      "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                    display: "inline-block",
                    fontWeight: 400,
                    textAlign: "center",
                    verticalAlign: "middle",
                    userSelect: "none",
                    borderColor: "rgb(255, 87, 88)",
                    color: "rgb(255, 255, 255)",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.3rem",
                    fontSize: "1.25rem",
                    lineHeight: 1.5,
                    backgroundColor: "rgb(255, 87, 88)",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Ücretsiz Ekspertiz İste
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6"
            style={{
              boxSizing: "border-box",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              flex: "0 0 50%",
              maxWidth: "50%",
              paddingBottom: "30px",
              marginTop: "1.25rem",
            }}
          >
            <div
              className="pricing-box pricing-simple px-5 py-4 bg-light text-center text-md-left"
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                borderRadius: "3px",
                position: "relative",
                border: "0px",
                backgroundColor: "rgb(248, 249, 250)",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingRight: "3rem",
                paddingLeft: "3rem",
                textAlign: "left",
              }}
            >
              <div
                className="pricing-title"
                style={{
                  boxSizing: "border-box",
                  padding: "1rem 0px",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.075)",
                  letterSpacing: "1px",
                  border: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <h3
                  style={{
                    boxSizing: "border-box",
                    lineHeight: 1.5,
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "rgb(85, 85, 85)",
                    fontFamily: "signika, sans-serif",
                  }}
                >
                  Diğer Danışmanlık Firmaları
                </h3>
              </div>
              <div
                className="pricing-features"
                style={{
                  boxSizing: "border-box",
                  borderTop: "1px solid rgba(0, 0, 0, 0.075)",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.075)",
                  padding: "2rem 0px",
                  border: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <ul
                  className="iconlist"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    paddingLeft: "0px",
                    margin: "0px",
                    listStyle: "none",
                    marginTop: "0px",
                    marginBottom: "0px",
                    marginLeft: "0px",
                    listStyleType: "none",
                  }}
                >
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-line-cross text-smaller"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        lineHeight: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        fontFamily: "lined-icons",
                        position: "relative",
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      {" "}
                    </strong>
                    <span
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "line-through",
                        fontWeight: 200,
                        color: "rgb(169, 169, 169)",
                      }}
                    >
                      Geniş izinli e-posta ve sms veritabanı
                    </span>{" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-line-cross text-smaller"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        lineHeight: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        fontFamily: "lined-icons",
                        position: "relative",
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    />
                    <span
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "line-through",
                        fontWeight: 200,
                        color: "rgb(169, 169, 169)",
                      }}
                    >
                      Kesintisiz, kapsamlı çağrı merkezi desteği
                    </span>{" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-line-cross text-smaller"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        lineHeight: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        fontFamily: "lined-icons",
                        position: "relative",
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    />
                    <span
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "line-through",
                        fontWeight: 200,
                        color: "rgb(169, 169, 169)",
                      }}
                    >
                      Çevrimiçi raporlama
                    </span>{" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-line-cross text-smaller"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        speak: "none",
                        fontStyle: "normal",
                        fontWeight: 400,
                        textTransform: "none",
                        lineHeight: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        fontFamily: "lined-icons",
                        position: "relative",
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    />
                    <span
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "line-through",
                        fontWeight: 200,
                        color: "rgb(169, 169, 169)",
                      }}
                    >
                      Çevrimiçi iletişim paneli
                    </span>{" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Fotoğraf çekimi
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      İlan Sitelerinde Listeleme
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Bölge uzmanlığı
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Uzman danışman tarafından yer gösterimi
                    </strong>
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Danışman bazında destek
                    </strong>{" "}
                  </li>
                  <li
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      position: "relative",
                      padding: "0.375rem 0px",
                    }}
                  >
                    <i
                      className="icon-check text-smaller"
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
                        display: "inline-block",
                        textAlign: "center",
                        top: "1px",
                        width: "14px",
                        marginRight: "0.5rem",
                        fontSize: "80%",
                      }}
                    />{" "}
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                    >
                      Danışman bazında müşteri tabanına tanıtım
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <div
          id="iletisim_kutulari"
          className="fancy-title title-border"
          style={{
            boxSizing: "border-box",
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h3
            style={{
              boxSizing: "border-box",
              margin: "0px 0px 30px",
              color: "rgb(68, 68, 68)",
              fontWeight: 600,
              lineHeight: 1.5,
              marginTop: "0px",
              fontSize: "1.5rem",
              position: "relative",
              marginBottom: "0px",
              fontFamily: "signika, sans-serif",
            }}
          >
            Tüm sorularınız için
          </h3>
        </div>
        <div
          className="w-100"
          style={{ boxSizing: "border-box", width: "100%" }}
        >
          <div
            className="row col-mb-50"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginRight: "-15px",
              marginLeft: "-15px",
              marginBottom: "-50px",
            }}
          >
            <div
              className="col-sm-12 col-lg-4"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                flex: "0 0 33.3333%",
                maxWidth: "33.3333%",
                paddingBottom: "50px",
              }}
            >
              <div
                className="feature-box fbox-center fbox-bg fbox-plain"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0px 2rem 2rem",
                  border: "1px solid rgb(229, 229, 229)",
                  borderRadius: "5px",
                  marginTop: "2rem",
                  marginLeft: "0px",
                  marginRight: "0px",
                }}
              >
                <div
                  className="fbox-icon"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px 0.75rem",
                    width: "5.5rem",
                    height: "4rem",
                    marginBottom: "1.5rem",
                    marginTop: "-2rem",
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "none",
                  }}
                >
                  <a
                    href="https://evimola.com/#"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      display: "block",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      color: "rgb(255, 255, 255)",
                      textDecoration: "none",
                    }}
                  >
                    <i
                      className="icon-phone3"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        fontFamily: "font-icons",
                        speak: "none",
                        fontWeight: 400,
                        textTransform: "none",
                        WebkitFontSmoothing: "antialiased",
                        display: "block",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        fontStyle: "normal",
                        textAlign: "center",
                        border: "none",
                        borderRadius: "0px",
                        fontSize: "3rem",
                        lineHeight: 1,
                        color: "rgb(68, 68, 68)",
                        backgroundColor: "transparent",
                      }}
                    />
                  </a>
                </div>
                <div
                  className="fbox-content"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px 0.75rem",
                    flexBasis: "0px",
                    flexGrow: 1,
                    minWidth: "0px",
                    maxWidth: "100%",
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 30px",
                      lineHeight: 1.5,
                      marginTop: "0px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      marginBottom: "0px",
                      color: "rgb(51, 51, 51)",
                      fontFamily: "signika, sans-serif",
                    }}
                  >
                    Bizi arayın
                    <span
                      className="subtitle"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        marginTop: "5px",
                        fontWeight: 300,
                        textTransform: "none",
                        color: "rgb(68, 68, 68)",
                        fontSize: "130%",
                      }}
                    >
                      0216-3868010
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-lg-4"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                flex: "0 0 33.3333%",
                maxWidth: "33.3333%",
                paddingBottom: "50px",
              }}
            >
              <div
                className="feature-box fbox-center fbox-bg fbox-plain"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0px 2rem 2rem",
                  border: "1px solid rgb(229, 229, 229)",
                  borderRadius: "5px",
                  marginTop: "2rem",
                  marginLeft: "0px",
                  marginRight: "0px",
                }}
              >
                <div
                  className="fbox-icon"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px 0.75rem",
                    width: "5.5rem",
                    height: "4rem",
                    marginBottom: "1.5rem",
                    marginTop: "-2rem",
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "none",
                  }}
                >
                  <a
                    href="https://evimola.com/#"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      display: "block",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      color: "rgb(255, 255, 255)",
                      textDecoration: "none",
                    }}
                  >
                    <i
                      className="icon-whatsapp"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        fontFamily: "font-icons",
                        speak: "none",
                        fontWeight: 400,
                        textTransform: "none",
                        WebkitFontSmoothing: "antialiased",
                        display: "block",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        fontStyle: "normal",
                        textAlign: "center",
                        border: "none",
                        borderRadius: "0px",
                        fontSize: "3rem",
                        lineHeight: 1,
                        color: "rgb(68, 68, 68)",
                        backgroundColor: "transparent",
                      }}
                    />
                  </a>
                </div>
                <div
                  className="fbox-content"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px 0.75rem",
                    flexBasis: "0px",
                    flexGrow: 1,
                    minWidth: "0px",
                    maxWidth: "100%",
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 30px",
                      lineHeight: 1.5,
                      marginTop: "0px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      marginBottom: "0px",
                      color: "rgb(51, 51, 51)",
                      fontFamily: "signika, sans-serif",
                    }}
                  >
                    Whatsapp'tan yazın
                    <span
                      className="subtitle"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        marginTop: "5px",
                        fontWeight: 300,
                        textTransform: "none",
                        color: "rgb(68, 68, 68)",
                        fontSize: "130%",
                      }}
                    >
                      0534-8937956
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-lg-4"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                flex: "0 0 33.3333%",
                maxWidth: "33.3333%",
                paddingBottom: "50px",
              }}
            >
              <div
                className="feature-box fbox-center fbox-bg fbox-plain"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0px 2rem 2rem",
                  border: "1px solid rgb(229, 229, 229)",
                  borderRadius: "5px",
                  marginTop: "2rem",
                  marginLeft: "0px",
                  marginRight: "0px",
                }}
              >
                <div
                  className="fbox-icon"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px 0.75rem",
                    width: "5.5rem",
                    height: "4rem",
                    marginBottom: "1.5rem",
                    marginTop: "-2rem",
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "none",
                  }}
                >
                  <a
                    href="https://evimola.com/#"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      display: "block",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      color: "rgb(255, 255, 255)",
                      textDecoration: "none",
                    }}
                  >
                    <i
                      className="icon-email"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        fontFamily: "font-icons",
                        speak: "none",
                        fontWeight: 400,
                        textTransform: "none",
                        WebkitFontSmoothing: "antialiased",
                        display: "block",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        fontStyle: "normal",
                        textAlign: "center",
                        border: "none",
                        borderRadius: "0px",
                        fontSize: "3rem",
                        lineHeight: 1,
                        color: "rgb(68, 68, 68)",
                        backgroundColor: "transparent",
                      }}
                    />
                  </a>
                </div>
                <div
                  className="fbox-content"
                  style={{
                    boxSizing: "border-box",
                    padding: "0px 0.75rem",
                    flexBasis: "0px",
                    flexGrow: 1,
                    minWidth: "0px",
                    maxWidth: "100%",
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 30px",
                      lineHeight: 1.5,
                      marginTop: "0px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      marginBottom: "0px",
                      color: "rgb(51, 51, 51)",
                      fontFamily: "signika, sans-serif",
                    }}
                  >
                    E-posta gönderin
                    <span
                      className="subtitle"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        marginTop: "5px",
                        fontWeight: 300,
                        textTransform: "none",
                        color: "rgb(68, 68, 68)",
                        fontSize: "130%",
                      }}
                    >
                      bilgi@evimola.com
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="button button-full center text-right topmargin-lg footer-stick"
          href="https://evimola.com/yonlendirme/"
          style={{
            boxSizing: "border-box",
            outline: "none",
            border: "none",
            position: "relative",
            cursor: "pointer",
            color: "rgb(255, 255, 255)",
            letterSpacing: "1px",
            whiteSpace: "normal",
            margin: "0px",
            padding: "30px 0px",
            borderRadius: "0px",
            display: "block",
            width: "100%",
            height: "auto",
            lineHeight: 1.6,
            fontWeight: 300,
            textTransform: "none",
            textShadow: "rgba(0, 0, 0, 0.1) 1px 1px 1px",
            transition: "all 0.2s ease-in-out 0s",
            fontSize: "110%",
            backgroundColor: "rgb(255, 87, 88)",
            textDecoration: "none",
            marginTop: "5rem",
            textAlign: "center",
            marginBottom: "-5rem",
          }}
        >
          <div
            className="container clearfix"
            style={{
              boxSizing: "border-box",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              marginRight: "auto",
              marginLeft: "auto",
              maxWidth: "1320px",
              position: "relative",
            }}
          >
            <h2
              style={{
                boxSizing: "border-box",
                margin: "0px 0px 30px",
                fontWeight: 600,
                lineHeight: 1.5,
                marginTop: "0px",
                fontSize: "30px",
                color: "white",
                marginBottom: "15px",
                fontFamily: "signika, sans-serif",
              }}
            >
              {" "}
              YÖNLENDİRİN KAZANIN!
            </h2>
            Gayrimenkulünü satmak isteyen tanıdıklarınızı bize bildirin, hem
            onlar kazansın, hem siz kazanın!{" "}
            <strong
              style={{
                boxSizing: "border-box",
                borderBottom: "2px solid rgb(238, 238, 238)",
                fontWeight: 700,
                transition: "border 0.2s ease-in-out 0s",
              }}
            >
              Detaylar için tıklayın.
            </strong>
          </div>
        </a>
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
        <br style={{ boxSizing: "border-box" }} />
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
