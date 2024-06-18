import Header from "../../components/PageHeader/Header";
import { Box } from "@mui/material";
import "./style.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useEffect, useRef } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import AndroidPreview from "../../components/Previews/Android";
import IOSPreview from "../../components/Previews/iOS";
import Select from "react-select";
import CustomBox from "../../components/Layout/Dashboard/Box";
import FeatureMenu from "../../components/globals/Navbar/FeatureMenu/FeatureMenu";
import { features, pushpreviewoptions } from "../../Utils/constants";
import DropDownTest from "../../components/DropDown/DropDownTest";
import { getSession } from "../../Utils/getUserSession";
import ModalP from "../../components/Modal";
import { useModal } from "../../components/Modal/useModal";
import ReviewYourMessgae from "../../components/ReviewYourMessage";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { getBrowser, getBrowserOS } from "../../Utils/getEnviromentDetail";
import { messageSchema } from "../../Utils/ZodSchema";
import AddIcon from "@mui/icons-material/Add";

const CreateNotificationPush = () => {
  let session = getSession();
  const [selectedAudiencetype, setSelectedAudiencetype] = useState("city");
  const [showemojitray, setshowemojitray] = useState(false);
  const [showemojitray1, setshowemojitray1] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [selectedView, setselectedView] = useState("Android");
  const [messagename, setMessageName] = useState("");
  const [notificationtitle, setnotificationtitle] = useState("");
  const [notificationdescription, setnotificationdescription] = useState("");
  const { isOpen, handleModal } = useModal();
  const [service, setService] = useState();
  const [setselectedemoji] = useState();
  const inputRef = useRef();
  const inputReffordescription = useRef();
  const [audience] = useState();

  let datapayload = {
    txt_employee_id: session.txt_employee_id,
    token: session.txt_token,
    platform: getBrowserOS(),
    device: getBrowser(),
    lst_employees: [{ txt_employee_id: session.txt_employee_id }],
    ser_service_id: service,
    txt_notification_title: notificationtitle,
    txt_notification_description: notificationdescription,
    is_scheduled: "false",
    dte_scheduled_date: "2023-07-07 00:00:00",
    txt_sender_id: session.txt_employee_id,
    operation: "SEND_NOTIFICATIONS_TO_EMPLOYESS",
  };

  useEffect(() => {
    setService("11");
  }, []);

  useEffect(() => {
    const fetchAudienceData = async () => {
      try {
        console.log("first")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAudienceData();
  }, []);

  const PushNotification = async () => {
    try {
      console.log('response');
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0]?.message);
      } else {
        toast.error(error.status);
      }
    }
  };

  const reviewHandle = () => {
    try {
      messageSchema.parse(datapayload);
      handleModal(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0]?.message);
      } else {
        toast.error(error.status);
      }
    }
  };

  function handleClickOutside() {
    if (showemojitray) {
      setshowemojitray(false);
    }
  }
  function handleEmojiClick(e) {
    e.stopPropagation();
    setshowemojitray(!showemojitray);
  }

  function handleClickOutside1() {
    if (showemojitray1) {
      setshowemojitray1(false);
    }
  }
  function handleEmojiClick1(e) {
    e.stopPropagation();
    setshowemojitray1(!showemojitray1);
  }

  return (
    <>
      <FeatureMenu menuoptions={features} />
      <CustomBox>
        {isOpen && (
          <ModalP open={isOpen} handleModal={handleModal}>
            <ReviewYourMessgae
              handleModal={handleModal}
              PushNotification={PushNotification}
            />
          </ModalP>
        )}
        <Box className="newpush__notification">
          <Header title="Notification" subtitle="New Push Notification" />

          {/* Message Name  */}
          <div>
            <div>
              <div>
                <label>Message Name</label>
              </div>
            </div>
            <div>
              <div className="message__name__wrapper">
                <input
                  className="message__name__input"
                  placeholder="Campagin Name or Internal Name"
                  value={messagename}
                  onChange={(e) => setMessageName(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Audience  */}
          <div className="card__wrapper">
            <div className="card__heading">
              <h3>1. Audience</h3>
            </div>
            <div className="audience__input">
              <div className="radio__input__wrapper">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="city"
                    name="radio-buttons-group"
                    value={selectedAudiencetype}
                    onChange={(e) => setSelectedAudiencetype(e.target.value)}
                  >
                    <FormControlLabel
                      value="city"
                      control={<Radio />}
                      label="City"
                    />
                    {selectedAudiencetype === "city" ? (
                      <div className="ihpvkN">
                        <div className="lnSa-DE">
                          <div>
                            <p className="cDzLoI">
                              What segment(s) <b>should</b> receive this
                              message?
                            </p>
                            <Select
                              options={audience?.cities || []}
                              isMulti
                              name="colors"
                              className="basic-multi-select"
                              classNamePrefix="select"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <FormControlLabel
                      value="department"
                      control={<Radio />}
                      label="Department"
                    />
                    {selectedAudiencetype === "department" ? (
                      <div className="ihpvkN">
                        <div className="lnSa-DE">
                          <div>
                            <p className="cDzLoI">
                              What segment(s) <b>should</b> receive this
                              message?
                            </p>
                            <Select
                              options={audience?.departments || []}
                              isMulti
                              name="colors"
                              className="basic-multi-select"
                              classNamePrefix="select"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <FormControlLabel
                      value="custom"
                      control={<Radio />}
                      label="Custom"
                    />
                    {selectedAudiencetype === "custom" ? (
                      <div className="ihpvkN">
                        <div className="lnSa-DE">
                          <div>
                            <p className="cDzLoI">
                              What segment(s) <b>should</b> receive this
                              message?
                            </p>
                            <Select
                              options={audience?.employees || []}
                              isMulti
                              name="colors"
                              className="basic-multi-select"
                              classNamePrefix="select"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>

          {/* Message  */}
          <div className="card__wrapper">
            <div className="card__heading">
              <h3>2. Message</h3>
            </div>

            <div>
              <div className="message__wrapper">
                <div className="left">
                  <div style={{ marginBottom: "1rem" }}>
                    <div>
                      <div>
                        <div style={{ color: "rgb(66, 77, 87)" }}>
                          <label htmlFor="title" className="title_label">
                            Title
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="notification__title">
                        <input
                          placeholder="Title (Any/English)"
                          id="title"
                          value={notificationtitle}
                          onChange={(e) => setnotificationtitle(e.target.value)}
                          ref={inputRef}
                        />
                        <div className="iTYJgU">
                          <div className="emoji__wrapper">
                            <button
                              onClick={handleEmojiClick}
                              style={{
                                height: "1rem",
                                width: "1rem",
                                transition:
                                  "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0s",
                                padding: "0px",
                                borderRadius: "0.5rem",
                                position: "relative",
                                flex: "1 1 auto",
                                textDecoration: "none",
                              }}
                              className="emojibutton"
                            >
                              <AddIcon className="icon" />
                            </button>
                            {showemojitray && (
                              <div className="picker_wrapper">
                                <Picker
                                  data={data}
                                  onClickOutside={handleClickOutside}
                                  onEmojiSelect={(emoji) => {
                                    const startPos =
                                      inputRef.current.selectionStart;
                                    const endPos =
                                      inputRef.current.selectionEnd;

                                    const newText =
                                      notificationtitle.substring(0, startPos) +
                                      emoji.native +
                                      notificationtitle.substring(endPos);

                                    setnotificationtitle(newText);
                                    setshowemojitray(false);

                                    inputRef.current.selectionStart =
                                      startPos + emoji.length;
                                    inputRef.current.selectionEnd =
                                      startPos + emoji.length;
                                    setselectedemoji(emoji);
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <div>
                      <div>
                        <div style={{ color: "rgb(66, 77, 87)" }}>
                          <label htmlFor="message" className="title_label">
                            Message*
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="notification__title">
                        <textarea
                          placeholder="Message (Any/English)"
                          rows={4}
                          id="message"
                          ref={inputReffordescription}
                          value={notificationdescription}
                          onChange={(e) =>
                            setnotificationdescription(e.target.value)
                          }
                        />
                        <div className="iTYJgU">
                          <div className="emoji__wrapper">
                            <button
                              onClick={handleEmojiClick1}
                              style={{
                                height: "1rem",
                                width: "1rem",
                                transition:
                                  "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0s",
                                padding: "0px",
                                borderRadius: "0.5rem",
                                position: "relative",
                                flex: "1 1 auto",
                                textDecoration: "none",
                              }}
                              className="emojibutton"
                            >
                              <AddIcon className="icon" />
                            </button>
                            {showemojitray1 && (
                              <div className="picker_wrapper">
                                <Picker
                                  data={data}
                                  onClickOutside={handleClickOutside1}
                                  onEmojiSelect={(emoji) => {
                                    const startPos =
                                      inputReffordescription.current
                                        .selectionStart;
                                    const endPos =
                                      inputReffordescription.current
                                        .selectionEnd;

                                    const newText =
                                      notificationdescription.substring(
                                        0,
                                        startPos
                                      ) +
                                      emoji.native +
                                      notificationdescription.substring(endPos);

                                    setnotificationdescription(newText);
                                    setshowemojitray1(false);

                                    inputReffordescription.current.selectionStart =
                                      startPos + emoji.length;
                                    inputReffordescription.current.selectionEnd =
                                      startPos + emoji.length;
                                    setselectedemoji(emoji);
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div style={{ marginBottom: "1rem" }}>
                    <div>
                      <div>
                        <div style={{ color: "rgb(66, 77, 87)" }}>
                          <label htmlFor="image" className="title_label">
                            Image
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="ggHaKb">
                        <div className="drHqWZ">
                          <input
                            placeholder="Upload or input url"
                            id="image"
                            className="bevShU"
                          />
                        </div>
                        <div className="cyTGgd">
                          <button className="eDzHiP">Upload</button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="right">
                  <div className="zQoyO">
                    <div className="cDhPTf">
                      {/* For Android */}
                      {selectedView === "Android" ? (
                        <AndroidPreview
                          toggle={toggle}
                          settoggle={settoggle}
                          title={notificationtitle}
                          description={notificationdescription}
                        />
                      ) : (
                        <IOSPreview description={notificationdescription} />
                      )}

                      {/* Select Android or iOS */}
                      <div className="hSMjDV">
                        <DropDownTest
                          menutype="pushpreview"
                          options={pushpreviewoptions}
                          setselectedView={setselectedView}
                          style={{
                            top: "auto",
                            bottom: "100%",
                            marginBottom: "1px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Time  */}
          {/* <div className="card__wrapper">
            <div className="card__heading">
              <h3>3. Delivery Schedule</h3>
            </div>
            <div className="deliveryschedule__carddivider">
              <div className="deliveryschedule__input">
                <div className="radio__input__wrapper">
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      When should this message start sending?
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      value={selectedDeliverytype}
                      onChange={(e) => setSelectedDeliverytype(e.target.value)}
                    >
                      <FormControlLabel
                        value="immediately"
                        control={<Radio />}
                        label="Immediately"
                      />
                      <FormControlLabel
                        value="specifictime"
                        control={<Radio />}
                        label="Specific Time"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="radio__input__wrapper">
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Per user optimization?
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="everyonesametime"
                        control={<Radio />}
                        label="Send to everyone at the same time"
                      />
                      <FormControlLabel
                        value="Intelligentdelivery"
                        control={<Radio />}
                        label="Intelligent delivery (recommended)"
                      />
                      <FormControlLabel
                        value="Customtime"
                        control={<Radio />}
                        label="Custom time"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="deliveryschedule__messages">
                <span>
                  <HelpIcon className="deliveryschedule__messages__help" />
                  Message will send the next time it is 1:14 PM in each users
                  timezone
                </span>
              </div>
            </div>
          </div> */}

          <div className="sc-jjzPuQ jMcAgT">
            <button className="ikOVjL sc-jSpIif ijMzcS" onClick={reviewHandle}>
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="kLkPUM"
              >
                <g fill="currentColor">
                  <path d="M15.74.15a.697.697 0 00-.758-.066L.55 7.764a1.031 1.031 0 00.084 1.867l2.169.92c0 .056.01.111.029.164l1.666 4.497a1.212 1.212 0 001.956.473 795.73 795.73 0 002.266-2.503.166.166 0 01.189-.041l2.105.892a1.06 1.06 0 001.215-.285c.096-.113.167-.246.208-.388L15.973.867a.676.676 0 00-.233-.716zM3.891 10.699l6.461-5.375a.15.15 0 01.225.01.144.144 0 01.057.109.146.146 0 01-.044.113L5.764 11.46a.485.485 0 00-.104.234l-.422 2.633-1.347-3.628z"></path>
                </g>
              </svg>
              <span className="gYCGXc">Review and Send</span>
            </button>
            <button className="cmQIow sc-jSpIif ijMzcS">
              <span className="gYCGXc">Save as Draft</span>
            </button>
          </div>
        </Box>
      </CustomBox>
    </>
  );
};

export default CreateNotificationPush;
