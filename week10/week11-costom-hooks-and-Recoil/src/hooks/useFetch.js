import { useState,useEffect } from "react";


export function usePosttitle(){
    const [post,Setpost]=useState({});

  async function getpost() {
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const postjson=await response.json();
    Setpost(postjson);
  }
  useEffect(()=>{
    getpost();
  },[])

  return post.title
}

export function useFetch(url){
  const [Data,SetData]=useState({});
  const [loading,Setloading]=useState(false);
  async function getData() {
    Setloading(true)
    const response=await fetch(url);
    const jsondata=await response.json();
    SetData(jsondata);
    Setloading(false)
  }
  useEffect(()=>{
    getData();
  },[url])
  return {
    Data,
    loading
  }
}