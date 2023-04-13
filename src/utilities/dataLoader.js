export const dataLoader = async () => {
  const data = await fetchData("/jobs.json");
  return data;
};
export const jobLoader = async (jID) => {
  const data = await fetchData("/jobs.json");
  const job = data.find((j) => j.id === Number(jID));
  if(job===undefined)  return {};
  return job;
 
};

export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  
 return data;
  
};
