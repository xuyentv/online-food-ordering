const upload_preset = "xuyentran2705";
const cloud_name = "dp6jqve7t"
const api_url = `https://api.cloudinary.com/v1_1/dp6jqve7t/image/upload`;
export const uploadImageToCloudiany = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);
    const res = await fetch(`${api_url}`, {
        method: "POST",
        body: data
    })
    const fileData = await res.json();
    return fileData.url;
}