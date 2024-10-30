import originAxios from "axios"

export default function request(option,sucess,failure){
  return new Promise((resolve,reject)=>{
    const instance = originAxios.create({
      baseURL:"/api",
      timeout:5000,
      headers:""
    });

    instance(option).then(res=>{
      console.log(res);
      sucess()
    }).catch(err=>{
      console.log(err);
      failure()
    })
  })
}

