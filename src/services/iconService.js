export const iconUrl = (icon) => {
  return `https://developer.accuweather.com/sites/default/files/${
    icon < 10 ? `0${icon}` : icon
  }-s.png`;
};;