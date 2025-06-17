// export const BASE_URL = "http://172.17.2.133:8000";
export const BASE_URL = "http://127.0.0.1:8000";

export const getStudents = async () => {
  const response = await fetch(`${BASE_URL}/api/students/`);

  const res = await response.json();
  console.log(res);
  return res;
};
