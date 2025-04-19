// src/services/api.ts
const BASE_URL = 'http://your_api_base_url';
const AUTH_TOKEN_KEY = 'authToken';


function storeToken(token: string) {
}

function getToken(): string | null {
  return null;
}

function clearToken() {
}


export async function loginApi(username: string, password: string) {


  const res = await fetch(`${BASE_URL}/api/auth/token/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }


  const data: { token: string } = await res.json();

  // cookies().set(AUTH_TOKEN_KEY, data.token, {
  //   httpOnly: true,
  // });

  return data;
}

export async function registerApi(email: string, username: string, password:string):Promise<any> {
  const response = await fetch(`${BASE_URL}/api/auth/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, username, password })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
export async function fetchAreas(token: string | null, search?: string, ordering?: string, page?:number): Promise<any> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }
  let url = `${BASE_URL}/api/areas/?`;
  if(search){
    url = url + `search=${search}&`;
  }
  if(ordering){
    url = url + `ordering=${ordering}&`;
  }
  if(page){
    url = url + `page=${page}&`;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data:any = await response.json();
  return data;
}

export async function logoutApi(token: string): Promise<any> {

  const res = await fetch(`${BASE_URL}/api/auth/token/logout/`, {
    method: 'POST',
    headers: {
      'Authorization': `Token ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  // cookies().delete(AUTH_TOKEN_KEY);



  return res;
}

export async function getUserProfile(token: string):Promise<any> {
  const response = await fetch(`${BASE_URL}/api/profile/`, {
    method: 'GET',
    headers: {
      'Authorization': `Token ${token}`, // Assuming token auth for profile
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
export async function fetchItems(token: string | null, search?: string, ordering?: string, page?:number, area?:number, state?:number, city?:number, is_active?:boolean): Promise<any> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }
  let url = `${BASE_URL}/api/items/?`;
  if(search){
    url = url + `search=${search}&`;
  }
  if(ordering){
    url = url + `ordering=${ordering}&`;
  }
  if(page){
    url = url + `page=${page}&`;
  }
  if(area){
    url = url + `area=${area}&`;
  }
  if(state){
    url = url + `section=${state}&`;
  }
  if(city){
    url = url + `group=${city}&`;
  }
  if(is_active !== undefined){
    url = url + `is_active=${is_active}&`;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data:any = await response.json();
  return data;
}
