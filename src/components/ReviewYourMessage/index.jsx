import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./style.css";
const ReviewYourMessgae = ({ handleModal, PushNotification }) => {
  return (
    <Box className="modal-dialog">
      <Box className="modal-content">
        <Box className="modal-header">
          <Typography id="modal-modal-header" variant="h4" component="h4">
            Review Your Message
          </Typography>
          <button
            className="close"
            type="button"
            onClick={() => handleModal(false)}
          >
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </button>
        </Box>

        <Box className="modal-body">
          <div className="cZLESn">
            <div className="juhSEa">Audience</div>
            <div id="appName" className="gbZRDU">
              <div className="eMraoy">App</div>
              <div className="bnKNmk">ESRF</div>
            </div>
            <div id="estimatedRecipients" className="gbZRDU">
              <div className="eMraoy">Estimated recipients</div>
              <div className="bnKNmk">0</div>
            </div>
            <div id="includedSegments" className="gbZRDU">
              <div className="eMraoy">Included segments</div>
              <div className="bnKNmk">Subscribed Users</div>
            </div>
          </div>
          <div className="cZLESn">
            <div className="juhSEa">Message</div>
            <div id="platforms" className="gbZRDU">
              <div className="eMraoy">Platforms</div>
              <div class="sc-kIuWHm bnKNmk">
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="currentColor"
                  class="sc-hKMtZM gpkAIJ sc-hNMcUi bxeziV"
                >
                  <path
                    opacity="0.53"
                    d="M47.107 25.839c0 2.904-.594 5.78-1.749 8.464a22.083 22.083 0 01-4.979 7.175 23.047 23.047 0 01-7.451 4.794 23.738 23.738 0 01-8.79 1.684c-3.016 0-6.003-.572-8.79-1.684a23.046 23.046 0 01-7.451-4.794 22.082 22.082 0 01-4.98-7.175 21.408 21.408 0 01-1.748-8.464c0-5.866 2.42-11.492 6.728-15.64 4.307-4.147 10.15-6.478 16.241-6.478 3.016 0 6.003.573 8.79 1.684a23.047 23.047 0 017.451 4.795 22.081 22.081 0 014.98 7.175 21.41 21.41 0 011.748 8.464z"
                    fill="#000"
                  ></path>
                  <path
                    d="M47.981 23.886a23.844 23.844 0 11-47.688 0 23.844 23.844 0 0147.688 0z"
                    fill="url(#d83befa1-9280-428a-a72e-2daacf027870_paint0_linear)"
                    stroke="#CDCDCD"
                    stroke-width="0.093"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M46.113 23.886a21.975 21.975 0 11-43.95 0 21.975 21.975 0 0143.95 0z"
                    fill="url(#d83befa1-9280-428a-a72e-2daacf027870_paint1_radial)"
                  ></path>
                  <path
                    d="M24.138 3.057a.32.32 0 00-.32.32v3.696a.32.32 0 10.64 0V3.378a.32.32 0 00-.32-.32zm-2.096.133a.32.32 0 00-.35.352l.161 1.546a.32.32 0 10.637-.066l-.161-1.546a.32.32 0 00-.287-.286zm4.207.001a.32.32 0 00-.287.286l-.163 1.546a.32.32 0 10.637.067l.163-1.546a.32.32 0 00-.35-.353zm-6.36.311a.32.32 0 00-.312.387l.765 3.615a.32.32 0 10.627-.132l-.765-3.616a.32.32 0 00-.315-.254zm8.513.003a.32.32 0 00-.316.254l-.768 3.615a.32.32 0 10.627.133l.768-3.615a.32.32 0 00-.311-.387zm-10.568.576a.32.32 0 00-.332.418l.48 1.48a.32.32 0 10.61-.199l-.48-1.478a.32.32 0 00-.278-.22zm12.61.001a.32.32 0 00-.276.22l-.481 1.479a.32.32 0 10.61.198l.48-1.478a.32.32 0 00-.332-.419zm-14.642.743a.32.32 0 00-.287.45l1.501 3.378a.32.32 0 10.586-.26L16.1 5.016a.32.32 0 00-.299-.191zm16.698.011a.32.32 0 00-.3.19l-1.505 3.375a.32.32 0 10.585.261l1.506-3.374a.32.32 0 00-.286-.452zm-18.584.987a.32.32 0 00-.3.48l.778 1.346a.32.32 0 10.554-.32l-.777-1.346a.32.32 0 00-.255-.16zm20.444 0a.319.319 0 00-.255.16l-.777 1.346a.32.32 0 10.554.32l.778-1.346a.32.32 0 00-.3-.48zM12.085 6.965a.321.321 0 00-.249.509l2.17 2.991a.32.32 0 10.519-.376l-2.17-2.991a.32.32 0 00-.27-.133zm24.13.017a.32.32 0 00-.271.131l-2.174 2.989a.32.32 0 10.518.377l2.174-2.988a.32.32 0 00-.248-.51zM10.447 8.338a.32.32 0 00-.255.535l1.04 1.155a.32.32 0 10.476-.429l-1.04-1.155a.32.32 0 00-.221-.106zm27.383.002a.32.32 0 00-.222.106l-1.04 1.155a.32.32 0 10.476.43l1.04-1.156a.32.32 0 00-.254-.535zM8.879 9.845a.32.32 0 00-.198.559l2.747 2.472a.32.32 0 10.429-.476L9.11 9.927a.32.32 0 00-.231-.082zm30.528.011a.319.319 0 00-.231.082l-2.748 2.47a.32.32 0 10.428.477l2.748-2.47a.32.32 0 00-.197-.559zM7.574 11.523a.32.32 0 00-.2.58l1.258.913a.32.32 0 10.377-.518l-1.258-.914a.32.32 0 00-.177-.061zm33.137.012a.32.32 0 00-.177.06l-1.259.914a.32.32 0 10.377.518l1.258-.912a.32.32 0 00-.2-.58zM6.355 13.313a.32.32 0 00-.138.597l3.2 1.848a.32.32 0 10.32-.555l-3.2-1.848a.32.32 0 00-.182-.042zm35.566 0a.316.316 0 00-.182.042l-3.2 1.848a.32.32 0 10.32.555l3.2-1.848a.32.32 0 00-.138-.597zM5.433 15.22a.32.32 0 00-.137.613l1.42.633a.32.32 0 10.26-.585l-1.419-.633a.32.32 0 00-.124-.028zm37.416.013a.318.318 0 00-.124.028l-1.42.632a.32.32 0 10.26.586l1.42-.632a.32.32 0 00-.136-.614zm-38.238 1.98a.32.32 0 00-.072.624l3.514 1.146a.32.32 0 10.198-.61L4.738 17.23a.32.32 0 00-.127-.015zm39.059.014a.31.31 0 00-.127.015l-3.514 1.143a.32.32 0 10.198.61l3.514-1.143a.32.32 0 00-.071-.625zM4.1 19.307a.32.32 0 00-.069.634l1.52.323a.32.32 0 10.133-.627l-1.52-.323a.312.312 0 00-.065-.007zm40.078.003a.397.397 0 00-.065.007l-1.52.323a.32.32 0 10.133.627l1.52-.324a.32.32 0 00-.068-.634zM3.712 21.412a.32.32 0 00-.002.638l3.674.388a.32.32 0 10.068-.637l-3.675-.389a.328.328 0 00-.065 0zm40.856.027a.29.29 0 00-.065 0l-3.676.384a.32.32 0 10.067.637l3.675-.383a.32.32 0 00-.001-.638zM3.649 23.567a.32.32 0 100 .64h1.555a.32.32 0 100-.64H3.649zm39.423 0a.32.32 0 100 .64h1.554a.32.32 0 100-.64h-1.554zM7.447 25.313a.289.289 0 00-.065 0l-3.675.384a.32.32 0 10.066.637l3.676-.383a.32.32 0 00-.002-.638zm33.38.023a.32.32 0 00-.002.638l3.674.388a.32.32 0 10.067-.637l-3.674-.389a.33.33 0 00-.066 0zM5.615 27.5a.326.326 0 00-.064.007l-1.521.323a.32.32 0 10.133.627l1.52-.323a.32.32 0 00-.068-.634zm37.045.003a.32.32 0 00-.069.634l1.521.323a.32.32 0 10.133-.627l-1.52-.323a.31.31 0 00-.065-.007zM8.176 28.765a.31.31 0 00-.127.015l-3.514 1.142a.32.32 0 10.198.61l3.514-1.143a.32.32 0 00-.071-.624zm31.92.011a.32.32 0 00-.072.624l3.514 1.146a.32.32 0 10.199-.61l-3.514-1.145a.32.32 0 00-.126-.015zM6.836 31.267a.32.32 0 00-.125.028l-1.42.632a.32.32 0 10.26.586l1.421-.632a.32.32 0 00-.136-.614zm34.601.013a.32.32 0 00-.137.613l1.42.633a.32.32 0 10.261-.585l-1.42-.633a.32.32 0 00-.124-.028zM9.6 31.974a.318.318 0 00-.183.042l-3.2 1.848a.32.32 0 10.32.555l3.2-1.848a.32.32 0 00-.137-.597zm29.076 0a.32.32 0 00-.138.598l3.2 1.847a.32.32 0 10.321-.555l-3.2-1.848a.32.32 0 00-.183-.042zM8.802 34.685a.321.321 0 00-.178.062l-1.258.913a.32.32 0 10.376.518l1.259-.913a.32.32 0 00-.2-.58zm30.665.011a.32.32 0 00-.2.58l1.258.914a.32.32 0 10.377-.519l-1.258-.913a.32.32 0 00-.177-.062zm-27.816.11a.319.319 0 00-.231.083l-2.748 2.47a.32.32 0 10.428.477l2.748-2.47a.32.32 0 00-.197-.56zm24.966.01a.32.32 0 00-.197.558l2.746 2.472a.32.32 0 10.429-.476l-2.747-2.472a.32.32 0 00-.23-.082zM14.26 37.163a.32.32 0 00-.271.132l-2.174 2.988a.32.32 0 10.518.377l2.174-2.988a.32.32 0 00-.248-.51zm19.74.013a.32.32 0 00-.248.509l2.17 2.991a.32.32 0 10.519-.376l-2.17-2.991a.32.32 0 00-.27-.133zm-22.547.462a.321.321 0 00-.221.106l-1.04 1.155a.32.32 0 10.476.428l1.04-1.155a.32.32 0 00-.255-.534zm25.37.001a.32.32 0 00-.255.535l1.04 1.155a.32.32 0 10.476-.429l-1.04-1.155a.32.32 0 00-.221-.106zm-19.528 1.282a.319.319 0 00-.298.19l-1.506 3.375a.32.32 0 10.585.26l1.506-3.374a.32.32 0 00-.287-.451zm13.667.01a.32.32 0 00-.287.45l1.501 3.377a.32.32 0 10.586-.26L31.26 39.12a.32.32 0 00-.299-.19zM14.65 39.963a.32.32 0 00-.255.16l-.778 1.346a.32.32 0 10.555.32l.777-1.346a.32.32 0 00-.3-.48zm18.978 0a.32.32 0 00-.3.48l.778 1.347a.32.32 0 10.555-.32l-.777-1.347a.32.32 0 00-.256-.16zm-12.98.049a.32.32 0 00-.316.253l-.768 3.615a.32.32 0 10.627.133l.768-3.614a.32.32 0 00-.312-.387zm6.971.002a.32.32 0 00-.312.386l.766 3.616a.32.32 0 10.627-.133l-.766-3.615a.32.32 0 00-.315-.254zm-3.48.364a.32.32 0 00-.32.32v3.696a.32.32 0 10.64 0V40.7a.32.32 0 00-.32-.32zm-5.881 1.195a.32.32 0 00-.277.22l-.48 1.478a.32.32 0 10.608.198l.481-1.478a.32.32 0 00-.332-.418zm11.76 0a.32.32 0 00-.332.419l.48 1.478a.32.32 0 10.61-.198l-.481-1.478a.32.32 0 00-.277-.22zm-7.89.824a.32.32 0 00-.287.285l-.163 1.546a.32.32 0 10.637.067l.163-1.546a.32.32 0 00-.35-.352zm4.01.001a.32.32 0 00-.35.352l.16 1.547a.32.32 0 10.637-.067l-.16-1.546a.32.32 0 00-.288-.286z"
                    fill="#F4F2F3"
                  ></path>
                  <g
                    opacity="0.409"
                    filter="url(#d83befa1-9280-428a-a72e-2daacf027870_filter0_F)"
                  >
                    <path
                      d="M39.155 11.071L21.626 21.255 10.543 38.703l16.214-12.009 12.398-15.623z"
                      fill="#000"
                    ></path>
                  </g>
                  <path
                    d="M26.65 26.517l-5.024-5.261 17.823-11.99L26.65 26.517z"
                    fill="#FF5150"
                  ></path>
                  <path
                    d="M26.65 26.517l-5.024-5.261-12.8 17.251 17.824-11.99z"
                    fill="#F1F1F1"
                  ></path>
                  <path
                    opacity="0.243"
                    d="M8.827 38.507l17.823-11.99L39.449 9.266 8.827 38.506z"
                    fill="#000"
                  ></path>
                  <defs>
                    <radialGradient
                      id="d83befa1-9280-428a-a72e-2daacf027870_paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(24.238 20.683) scale(23.8435)"
                    >
                      <stop stop-color="#06C2E7"></stop>
                      <stop offset="0.25" stop-color="#0DB8EC"></stop>
                      <stop offset="0.5" stop-color="#12AEF1"></stop>
                      <stop offset="0.75" stop-color="#1F86F9"></stop>
                      <stop offset="1" stop-color="#107DDD"></stop>
                    </radialGradient>
                    <linearGradient
                      id="d83befa1-9280-428a-a72e-2daacf027870_paint0_linear"
                      x1="24.138"
                      y1="47.73"
                      x2="24.138"
                      y2="0.043"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#BDBDBD"></stop>
                      <stop offset="1" stop-color="#fff"></stop>
                    </linearGradient>
                    <filter
                      id="d83befa1-9280-428a-a72e-2daacf027870_filter0_F"
                      x="8.628"
                      y="9.156"
                      width="32.443"
                      height="31.463"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feGaussianBlur
                        stdDeviation="0.958"
                        result="effect1_foregroundBlur"
                      ></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="currentColor"
                  class="sc-hKMtZM gpkAIJ sc-hNMcUi bxeziV"
                >
                  <path
                    d="M43.322 35.725c-.631.33-1.29.627-1.975.884a19.13 19.13 0 01-6.731 1.212c-8.873 0-16.602-6.104-16.602-13.935 0-2.203 1.274-4.112 3.08-5.117-8.024.336-10.087 8.7-10.087 13.6 0 13.85 12.767 15.256 15.517 15.256 1.483 0 3.72-.432 5.069-.855l.245-.083a24.064 24.064 0 0012.486-9.903c.414-.657-.314-1.42-1.002-1.059z"
                    fill="url(#52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint0_linear)"
                  ></path>
                  <path
                    opacity="0.35"
                    d="M43.322 35.725c-.631.33-1.29.627-1.975.884a19.13 19.13 0 01-6.731 1.212c-8.873 0-16.602-6.104-16.602-13.935 0-2.203 1.274-4.112 3.08-5.117-8.024.336-10.087 8.7-10.087 13.6 0 13.85 12.767 15.256 15.517 15.256 1.483 0 3.72-.432 5.069-.855l.245-.083a24.064 24.064 0 0012.486-9.903c.414-.657-.314-1.42-1.002-1.059z"
                    fill="url(#52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint1_radial)"
                  ></path>
                  <path
                    d="M19.82 45.265a14.834 14.834 0 01-4.262-4.008 15.272 15.272 0 01-2.837-8.889c0-4.899 2.281-9.239 5.798-11.988.799-.625 1.821-1.254 2.575-1.611.585-.277 1.585-.776 2.915-.757a6.067 6.067 0 014.815 2.43 5.972 5.972 0 011.193 3.5c0-.04 4.587-14.926-15.01-14.926C6.777 9.016 0 16.829 0 23.68c0 4.347 1.009 7.817 2.271 10.506a24.061 24.061 0 0014.41 12.67A23.99 23.99 0 0024.008 48c2.65 0 5.199-.436 7.584-1.23a14.204 14.204 0 01-4.26.655c-2.751 0-5.315-.798-7.512-2.16z"
                    fill="url(#52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint2_linear)"
                  ></path>
                  <path
                    opacity="0.41"
                    d="M19.82 45.265a14.834 14.834 0 01-4.262-4.008 15.272 15.272 0 01-2.837-8.889c0-4.899 2.281-9.239 5.798-11.988.799-.625 1.821-1.254 2.575-1.611.585-.277 1.585-.776 2.915-.757a6.067 6.067 0 014.815 2.43 5.972 5.972 0 011.193 3.5c0-.04 4.587-14.926-15.01-14.926C6.777 9.016 0 16.829 0 23.68c0 4.347 1.009 7.817 2.271 10.506a24.061 24.061 0 0014.41 12.67A23.99 23.99 0 0024.008 48c2.65 0 5.199-.436 7.584-1.23a14.204 14.204 0 01-4.26.655c-2.751 0-5.315-.798-7.512-2.16z"
                    fill="url(#52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint3_radial)"
                  ></path>
                  <path
                    d="M28.559 27.91c-.152.198-.62.47-.62 1.063 0 .488.32.96.886 1.355 2.696 1.881 7.778 1.628 7.792 1.628 2.098-.008 3.986-.584 5.676-1.573.77-.45 1.481-.984 2.123-1.594 2.203-2.093 3.546-5.042 3.583-8.32.048-4.203-1.493-6.997-2.126-8.234C41.9 4.47 33.322 0 23.996 0 10.849 0 .177 10.565 0 23.663.091 16.81 6.9 11.278 14.995 11.278c.656 0 4.399.064 7.876 1.889 3.062 1.607 4.668 3.55 5.784 5.476 1.159 2 1.365 4.527 1.365 5.535 0 1.007-.508 2.499-1.461 3.733z"
                    fill="url(#52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint4_radial)"
                  ></path>
                  <path
                    d="M28.559 27.91c-.152.198-.62.47-.62 1.063 0 .488.32.96.886 1.355 2.696 1.881 7.778 1.628 7.792 1.628 2.098-.008 3.986-.584 5.676-1.573.77-.45 1.481-.984 2.123-1.594 2.203-2.093 3.546-5.042 3.583-8.32.048-4.203-1.493-6.997-2.126-8.234C41.9 4.47 33.322 0 23.996 0 10.849 0 .177 10.565 0 23.663.091 16.81 6.9 11.278 14.995 11.278c.656 0 4.399.064 7.876 1.889 3.062 1.607 4.668 3.55 5.784 5.476 1.159 2 1.365 4.527 1.365 5.535 0 1.007-.508 2.499-1.461 3.733z"
                    fill="url(#52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint5_radial)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(17.8845 0 0 17.0094 29.476 33.447)"
                    >
                      <stop offset="0.717" stop-opacity="0"></stop>
                      <stop offset="0.946" stop-opacity="0.53"></stop>
                      <stop offset="1"></stop>
                    </radialGradient>
                    <radialGradient
                      id="52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint3_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(3.98635 -26.5591 21.40157 3.21224 13.37 37.25)"
                    >
                      <stop offset="0.763" stop-opacity="0"></stop>
                      <stop offset="0.946" stop-opacity="0.5"></stop>
                      <stop offset="1"></stop>
                    </radialGradient>
                    <radialGradient
                      id="52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint4_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(92.129 -1.862 6.667) scale(37.9559 80.8396)"
                    >
                      <stop stop-color="#35C1F1"></stop>
                      <stop offset="0.111" stop-color="#34C1ED"></stop>
                      <stop offset="0.232" stop-color="#2FC2DF"></stop>
                      <stop offset="0.314" stop-color="#2BC3D2"></stop>
                      <stop offset="0.673" stop-color="#36C752"></stop>
                    </radialGradient>
                    <radialGradient
                      id="52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint5_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(73.675 13.023 37.617) scale(18.2508 14.9009)"
                    >
                      <stop stop-color="#66EB6E"></stop>
                      <stop
                        offset="1"
                        stop-color="#66EB6E"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <linearGradient
                      id="52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint0_linear"
                      x1="11.007"
                      y1="33.197"
                      x2="44.445"
                      y2="33.197"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0C59A4"></stop>
                      <stop offset="1" stop-color="#114A8B"></stop>
                    </linearGradient>
                    <linearGradient
                      id="52265a59-99e5-4751-aa9d-b8dd5c1f6c47_paint2_linear"
                      x1="28.636"
                      y1="18.691"
                      x2="7.749"
                      y2="41.441"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1B9DE2"></stop>
                      <stop offset="0.162" stop-color="#1595DF"></stop>
                      <stop offset="0.667" stop-color="#0680D7"></stop>
                      <stop offset="1" stop-color="#0078D4"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="currentColor"
                  class="sc-hKMtZM gpkAIJ sc-hNMcUi bxeziV"
                >
                  <path
                    d="M44.879 15.596c-.98-2.356-2.962-4.899-4.52-5.702 1.268 2.485 2.001 4.977 2.282 6.838l.004.037c-2.548-6.35-6.868-8.91-10.395-14.486-.178-.281-.357-.564-.53-.862a6.9 6.9 0 01-.249-.466 4.092 4.092 0 01-.337-.891.06.06 0 00-.05-.06.077.077 0 00-.043 0c-.003 0-.008.004-.012.005l-.016.01.01-.013c-5.66 3.315-7.58 9.446-7.757 12.514-2.26.155-4.42.988-6.2 2.39a6.717 6.717 0 00-.584-.441 10.438 10.438 0 01-.063-5.506c-2.315 1.054-4.115 2.72-5.424 4.19h-.01c-.893-1.13-.83-4.863-.78-5.642-.01-.048-.666.34-.752.4a16.413 16.413 0 00-2.201 1.885 19.733 19.733 0 00-2.104 2.523l-.001.004v-.004a19.017 19.017 0 00-3.022 6.826c-.011.049-.02.1-.03.149-.043.198-.196 1.19-.223 1.406l-.005.049a21.475 21.475 0 00-.365 3.108l-.002.116C1.5 36.413 11.587 46.5 24.03 46.5c11.144 0 20.396-8.09 22.208-18.715.038-.289.069-.578.102-.87.448-3.863-.05-7.924-1.461-11.32zM18.911 33.23c.105.05.204.105.312.153l.016.01c-.11-.053-.22-.107-.328-.163zm23.736-16.455l-.003-.022c0 .008.002.016.004.024l-.001-.003z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint0_linear)"
                  ></path>
                  <path
                    d="M44.88 15.595c-.98-2.355-2.963-4.898-4.52-5.701 1.267 2.484 2 4.977 2.28 6.837 0-.005.002.005.004.021l.004.025c2.126 5.763.968 11.623-.701 15.204-2.582 5.54-8.833 11.219-18.617 10.942-10.57-.3-19.883-8.143-21.621-18.416-.317-1.62 0-2.442.159-3.758-.194 1.014-.268 1.307-.366 3.109l-.002.115C1.5 36.414 11.588 46.5 24.03 46.5c11.144 0 20.397-8.09 22.208-18.715.038-.289.069-.579.103-.87.447-3.863-.05-7.924-1.462-11.32z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint1_radial)"
                  ></path>
                  <path
                    d="M44.88 15.595c-.98-2.355-2.963-4.898-4.52-5.701 1.267 2.484 2 4.977 2.28 6.837 0-.005.002.005.004.021l.004.025c2.126 5.763.968 11.623-.701 15.204-2.582 5.54-8.833 11.219-18.617 10.942-10.57-.3-19.883-8.143-21.621-18.416-.317-1.62 0-2.442.159-3.758-.194 1.014-.268 1.307-.366 3.109l-.002.115C1.5 36.414 11.588 46.5 24.03 46.5c11.144 0 20.397-8.09 22.208-18.715.038-.289.069-.579.103-.87.447-3.863-.05-7.924-1.462-11.32z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint2_radial)"
                  ></path>
                  <path
                    d="M33.93 18.244c.05.034.094.069.14.103a12.255 12.255 0 00-2.092-2.73C24.975 8.616 30.142.435 31.013.019l.01-.013c-5.66 3.315-7.58 9.447-7.756 12.514.262-.018.524-.04.791-.04 4.224 0 7.902 2.323 9.872 5.765z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint3_radial)"
                  ></path>
                  <path
                    d="M24.073 19.642c-.037.56-2.017 2.493-2.71 2.493-6.406 0-7.447 3.875-7.447 3.875.284 3.264 2.556 5.951 5.308 7.373.125.065.252.123.38.181.217.097.438.187.661.27.944.335 1.932.525 2.932.566 11.23.527 13.405-13.424 5.301-17.475 2.075-.361 4.23.473 5.433 1.318-1.97-3.442-5.649-5.764-9.872-5.764-.268 0-.53.022-.792.04-2.26.156-4.42.989-6.2 2.39.343.29.73.68 1.548 1.484 1.528 1.506 5.45 3.066 5.458 3.249z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint4_radial)"
                  ></path>
                  <path
                    d="M24.073 19.642c-.037.56-2.017 2.493-2.71 2.493-6.406 0-7.447 3.875-7.447 3.875.284 3.264 2.556 5.951 5.308 7.373.125.065.252.123.38.181.217.097.438.187.661.27.944.335 1.932.525 2.932.566 11.23.527 13.405-13.424 5.301-17.475 2.075-.361 4.23.473 5.433 1.318-1.97-3.442-5.649-5.764-9.872-5.764-.268 0-.53.022-.792.04-2.26.156-4.42.989-6.2 2.39.343.29.73.68 1.548 1.484 1.528 1.506 5.45 3.066 5.458 3.249z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint5_radial)"
                  ></path>
                  <path
                    d="M16.015 14.16c.157.1.313.204.467.309a10.439 10.439 0 01-.063-5.506c-2.315 1.054-4.115 2.72-5.423 4.19.108-.003 3.376-.061 5.02 1.007z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint6_radial)"
                  ></path>
                  <path
                    d="M1.708 24.507C3.447 34.78 12.76 42.623 23.33 42.923c9.784.277 16.035-5.402 18.617-10.942 1.668-3.582 2.827-9.44.7-15.204v-.003l-.003-.021-.003-.022.004.038c.8 5.218-1.855 10.273-6.005 13.692l-.012.029c-8.086 6.583-15.823 3.972-17.39 2.903-.11-.053-.219-.108-.327-.163-4.714-2.253-6.662-6.548-6.244-10.23-3.98 0-5.338-3.358-5.338-3.358s3.574-2.548 8.284-.332c4.362 2.053 8.459.332 8.46.332-.01-.183-3.93-1.743-5.46-3.249-.816-.805-1.204-1.193-1.547-1.484a6.666 6.666 0 00-.584-.44c-.154-.105-.31-.208-.467-.31-1.643-1.068-4.911-1.01-5.02-1.006h-.01c-.893-1.132-.83-4.863-.78-5.643-.01-.048-.666.34-.751.4a16.412 16.412 0 00-2.202 1.886 19.734 19.734 0 00-2.104 2.523l-.001.004v-.004a19.016 19.016 0 00-3.022 6.826c-.011.049-.811 3.547-.417 5.362z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint7_radial)"
                  ></path>
                  <path
                    d="M31.978 15.618a12.252 12.252 0 012.092 2.729c.124.093.24.186.338.277 5.108 4.706 2.432 11.362 2.232 11.837 4.15-3.419 6.804-8.474 6.005-13.692-2.548-6.35-6.868-8.91-10.395-14.486a28.528 28.528 0 01-.53-.862 6.9 6.9 0 01-.249-.466 4.098 4.098 0 01-.337-.891.059.059 0 00-.051-.06.077.077 0 00-.042 0c-.003 0-.008.004-.012.005l-.016.01c-.871.415-6.038 8.596.965 15.599z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint8_radial)"
                  ></path>
                  <path
                    d="M34.409 18.623a4.436 4.436 0 00-.339-.276c-.045-.035-.09-.07-.14-.104-1.203-.845-3.357-1.68-5.432-1.318 8.104 4.051 5.928 18.002-5.301 17.476-1-.041-1.988-.232-2.932-.566a12.712 12.712 0 01-.662-.27 8.479 8.479 0 01-.38-.182l.016.01c1.566 1.068 9.304 3.68 17.39-2.904l.012-.029c.2-.474 2.875-7.13-2.232-11.837z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint9_radial)"
                  ></path>
                  <path
                    d="M13.916 26.01s1.04-3.875 7.447-3.875c.693 0 2.673-1.933 2.71-2.493.036-.56-4.097 1.72-8.46-.332-4.71-2.216-8.283.332-8.283.332s1.357 3.357 5.337 3.357c-.417 3.683 1.53 7.978 6.244 10.23.105.05.204.106.313.154-2.752-1.422-5.024-4.11-5.308-7.373z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint10_radial)"
                  ></path>
                  <path
                    d="M44.88 15.596c-.98-2.356-2.963-4.899-4.52-5.702 1.267 2.485 2 4.977 2.28 6.838l.005.037c-2.548-6.35-6.867-8.91-10.395-14.486-.178-.281-.357-.564-.53-.862a6.9 6.9 0 01-.249-.466 4.098 4.098 0 01-.337-.891.059.059 0 00-.05-.06.077.077 0 00-.043 0c-.003 0-.008.004-.011.005l-.017.01.01-.013c-5.66 3.315-7.58 9.446-7.757 12.514.263-.018.525-.04.792-.04 4.224 0 7.902 2.322 9.872 5.764-1.203-.845-3.357-1.68-5.433-1.319 8.104 4.052 5.928 18.003-5.3 17.476-1-.04-1.99-.232-2.933-.566a12.585 12.585 0 01-.661-.27 8.595 8.595 0 01-.38-.181l.015.009c-.11-.053-.22-.108-.328-.163.105.05.204.105.313.153-2.752-1.422-5.024-4.11-5.308-7.373 0 0 1.04-3.875 7.447-3.875.693 0 2.673-1.932 2.71-2.493-.009-.183-3.93-1.743-5.459-3.249-.817-.805-1.205-1.193-1.548-1.484a6.666 6.666 0 00-.584-.44 10.438 10.438 0 01-.063-5.506c-2.314 1.053-4.114 2.72-5.423 4.19h-.01c-.894-1.131-.83-4.863-.78-5.642-.01-.048-.666.34-.752.399A16.413 16.413 0 007.25 9.796a19.736 19.736 0 00-2.103 2.523l-.001.004v-.004a19.017 19.017 0 00-3.022 6.826c-.011.049-.02.1-.03.149a37.332 37.332 0 00-.26 1.42c-.002.017.002-.016 0 0a26.21 26.21 0 00-.333 3.144l-.002.115C1.5 36.414 11.588 46.5 24.03 46.5c11.144 0 20.397-8.09 22.208-18.715.038-.289.069-.578.102-.87.448-3.863-.05-7.924-1.46-11.32zm-2.236 1.157l.004.024v-.003l-.004-.021z"
                    fill="url(#9fff46df-acd3-4502-b84d-248d6af1684e_paint11_linear)"
                  ></path>
                  <defs>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(46.0802 0 0 46.8562 32.68 5.183)"
                    >
                      <stop offset="0.13" stop-color="#FFBD4F"></stop>
                      <stop offset="0.28" stop-color="#FF980E"></stop>
                      <stop offset="0.47" stop-color="#FF3750"></stop>
                      <stop offset="0.78" stop-color="#EB0878"></stop>
                      <stop offset="0.86" stop-color="#E50080"></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint2_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(47.2322 0 0 46.8562 19.32 24.536)"
                    >
                      <stop offset="0.3" stop-color="#960E18"></stop>
                      <stop
                        offset="0.35"
                        stop-color="#B11927"
                        stop-opacity="0.74"
                      ></stop>
                      <stop
                        offset="0.43"
                        stop-color="#DB293D"
                        stop-opacity="0.34"
                      ></stop>
                      <stop
                        offset="0.5"
                        stop-color="#F5334B"
                        stop-opacity="0.09"
                      ></stop>
                      <stop
                        offset="0.53"
                        stop-color="#FF3750"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint3_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(15.1247 0 0 25.678 28.452 -2.196)"
                    >
                      <stop offset="0.13" stop-color="#FFF44F"></stop>
                      <stop offset="0.53" stop-color="#FF980E"></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint4_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(20.014 0 0 21.9356 18.472 36.633)"
                    >
                      <stop offset="0.35" stop-color="#3A8EE6"></stop>
                      <stop offset="0.67" stop-color="#9059FF"></stop>
                      <stop offset="1" stop-color="#C139E6"></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint5_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(10.6275 0 0 12.942 21.891 19.718)"
                    >
                      <stop
                        offset="0.21"
                        stop-color="#9059FF"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="0.97"
                        stop-color="#6E008B"
                        stop-opacity="0.6"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint6_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(15.9112 0 0 15.9678 22.517 3.457)"
                    >
                      <stop offset="0.1" stop-color="#FFE226"></stop>
                      <stop offset="0.79" stop-color="#FF7139"></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint7_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(75.9636 0 0 63.7673 37.049 -7.018)"
                    >
                      <stop offset="0.11" stop-color="#FFF44F"></stop>
                      <stop offset="0.46" stop-color="#FF980E"></stop>
                      <stop offset="0.72" stop-color="#FF3647"></stop>
                      <stop offset="0.9" stop-color="#E31587"></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint8_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(5.2596 23.51968 -101.74303 22.75233 8.837 14.04)"
                    >
                      <stop stop-color="#FFF44F"></stop>
                      <stop offset="0.3" stop-color="#FF980E"></stop>
                      <stop offset="0.57" stop-color="#FF3647"></stop>
                      <stop offset="0.74" stop-color="#E31587"></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint9_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(43.6142 0 0 42.848 22.681 9.2)"
                    >
                      <stop offset="0.14" stop-color="#FFF44F"></stop>
                      <stop offset="0.48" stop-color="#FF980E"></stop>
                      <stop offset="0.66" stop-color="#FF3647"></stop>
                      <stop offset="0.9" stop-color="#E31587"></stop>
                    </radialGradient>
                    <radialGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint10_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(52.4228 0 0 46.8984 34.001 11.706)"
                    >
                      <stop offset="0.09" stop-color="#FFF44F"></stop>
                      <stop offset="0.63" stop-color="#FF980E"></stop>
                    </radialGradient>
                    <linearGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint0_linear"
                      x1="40.762"
                      y1="7.208"
                      x2="4.585"
                      y2="42.106"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.05" stop-color="#FFF44F"></stop>
                      <stop offset="0.37" stop-color="#FF980E"></stop>
                      <stop offset="0.53" stop-color="#FF3647"></stop>
                      <stop offset="0.7" stop-color="#E31587"></stop>
                    </linearGradient>
                    <linearGradient
                      id="9fff46df-acd3-4502-b84d-248d6af1684e_paint11_linear"
                      x1="37.5"
                      y1="6.51"
                      x2="8.571"
                      y2="38.118"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.17"
                        stop-color="#FFF44F"
                        stop-opacity="0.8"
                      ></stop>
                      <stop
                        offset="0.6"
                        stop-color="#FFF44F"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="currentColor"
                  class="sc-hKMtZM gpkAIJ sc-hNMcUi bxeziV"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M44.874 12.148C40.746 4.893 32.944 0 24 0 15.143 0 7.407 4.798 3.248 11.936l10.383 17.808A11.798 11.798 0 0112.147 24c0-6.546 5.306-11.852 11.852-11.852h20.875z"
                    fill="#DB4437"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.933 48l10.334-18.073v-.002A11.847 11.847 0 0124 35.852a11.849 11.849 0 01-10.37-6.108L3.248 11.936A23.89 23.89 0 000 24c0 13.233 10.709 23.964 23.933 24z"
                    fill="#0F9D58"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48 24c0 13.255-10.745 24-24 24h-.067l10.334-18.074A11.8 11.8 0 0035.852 24c0-6.546-5.306-11.852-11.851-11.852h20.873A23.89 23.89 0 0148 24z"
                    fill="#FFCD40"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.852 24c0 6.545-5.307 11.852-11.852 11.852-6.546 0-11.852-5.307-11.852-11.852 0-6.546 5.306-11.852 11.852-11.852 6.545 0 11.852 5.306 11.852 11.852zm-2.371 0a9.481 9.481 0 11-18.963 0 9.481 9.481 0 0118.963 0z"
                    fill="#F1F1F1"
                  ></path>
                  <path
                    d="M24 33.481a9.481 9.481 0 100-18.962 9.481 9.481 0 000 18.962z"
                    fill="#4285F4"
                  ></path>
                </svg>
              </div>
            </div>
            <div id="title_0" className="gbZRDU">
              <div className="eMraoy">Title</div>
              <div className="bnKNmk">New Offer</div>
            </div>
            <div id="message_0" className="gbZRDU">
              <div className="eMraoy">Message</div>
              <div className="bnKNmk">Get the deal now!</div>
            </div>
          </div>
          <div className="cZLESn">
            <div className="juhSEa">Schedule</div>
            <div id="appName" className="gbZRDU">
              <div className="eMraoy">Start sending</div>
              <div className="bnKNmk">Send immediately</div>
            </div>
            <div id="estimatedRecipients" className="gbZRDU">
              <div className="eMraoy">Per user optimization</div>
              <div className="bnKNmk">Deliver immediately</div>
            </div>
          </div>
        </Box>

        <Box className="modal-footer">
          <div>
            <button className="iVBgxc" onClick={() => handleModal(false)}>
              <span>Make Changes</span>
            </button>
            <button className="emgbPv" onClick={PushNotification}>
              <span>Send Message</span>
            </button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewYourMessgae;
