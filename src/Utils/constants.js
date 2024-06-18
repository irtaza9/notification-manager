//top-appbar for project change
export const options = [
  { value: "ntl-teams", label: "NTL-Teams" },
  { value: "nayatv", label: "Nayatv" },
  { value: "nwatch", label: "Nwatch" },
];

//ShortCutMenuOptionForDropDown
export function ShortCutMenuOption(slug) {
  const create = [
    { value: `${slug}/notifications/new`, label: "New Push" },
    // { value: `${slug}/email`, label: "Email" },
    // { value: `${slug}/in-app-messages`, label: "In App" },
  ];
  return create;
}

export const features = [
  { name: "Push", path: "campaigns" },
  { name: "Email", path: "email" },
  { name: "In-App", path: "in-app-messages" },
  { name: "Sms", path: "sms" },
  { name: "Templates", path: "templates" },
  { name: "Automated", path: "automated" },
];

//MenuLinksForFeatureNavbarinCampaignComponent
export function getFeatureMenuLinks(slug, id) {
  const create = [
    `/project/${slug}/campaigns`,
    `/project/${slug}/email`,
    `/project/${slug}/in-app-messages`,
    `/project/${slug}/sms`,
    `/project/${slug}/templates`,
    `/project/${slug}/automated`,
    `/project/${slug}/notifications/new`,
    `/project/${slug}/notifications/${id}`,
  ];
  return create;
}

//dashboard filter options for day filter
export const dayfilteroptions = [
  { value: "24hrs", label: "24 Hours" },
  { value: "30days", label: "Last 30 Days" },
  { value: "lastyear", label: "Past year" },
];

//dashboard filter options for day filter
export const platformfilteroptions = [
  { value: "Android", label: "Android" },
  { value: "iOS", label: "iOS" },
];

//dashboard filter options for day filter
export const pushpreviewoptions = [
  { value: "Android", label: "Android" },
  { value: "iOS", label: "iOS" },
];

export const onesignalAppIdRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

export const featurestabdata = [
  { value: "all", label: "All" },
  { value: "drafts", label: "Drafts" },
  { value: "sent", label: "Sent" },
];
