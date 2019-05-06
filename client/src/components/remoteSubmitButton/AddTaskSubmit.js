import axios from "axios";

function addTaskSubmit(values) {
  
  const form = new FormData();
  form.append("summary", values.summary);
  form.append("date", values.date);
  form.append("files", values.files);
  
  try {
    axios.post('/postTask', form);
  } catch (error) {
    console.log(error);
  }
}

export default addTaskSubmit