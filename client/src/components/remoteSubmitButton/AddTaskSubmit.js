// import { SubmissionError } from 'redux-form';
import axios from "axios";

function addTaskSubmit(values) {
  console.log(values);
  const form = new FormData();
    form.append("summary", values.summary);
    form.append("date", values.date);
    form.append("files", values.files);
  try {
     axios.post('/postTask', form);
      // summary: values.summary,
      // date: values.date,
      // files: values.file
    // });
  } catch (error) {
    console.log(error);
  }  
 

    // console.log(values);
    // const form = new FormData();
    // form.append("summary", values.summary);
    // form.append("date", values.date);
    // form.append("file", values.file);
    // return new Promise((resolve, reject) => {
    //     fetch("/postTask", {method: "post", body: form})
    //     //   .then(res => res.json())
    //     //   .then(res => {
    //     //     if (res.hasOwnProperty("errors")) {
    //     //       reject(res.errors)
    //     //     } else {
    //     //       resolve(res.data)
    //     //     }
    //     //   })
    //   })
}

export default addTaskSubmit