const API_URL = "https://turntable-restapi-4.onrender.com/api";
//const API_URL = "http://localhost:50010/api";
//const API_URL = "https://react-fast-pizza-api.onrender.com/api";
//const API_URL = "https://fast-food-restapi-ol6p.vercel.app/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/turntable`);
  if (!res.ok) throw Error("Failed getting menu");
  const data = await res.json();
  return data;
}

export async function getTurntable() {
  const res = await fetch(`${API_URL}/turntablemenu`);
  if (!res.ok) throw Error("Failed getting menu");
  const data = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) {
    throw new Error(`Couldn't find order #${id}`);
  }

  const data = await res.json();
  return data.data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating your order");
  }
}

// for Admin login

export async function adminLogin(credentials) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw Error("Invalid login credentials");
  const data = await res.json();
  return data;
}

//Turntable Product CRUD

export async function addTurntable(data, token) {
  const res = await fetch(`${API_URL}/turntable`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw Error("Failed to add product");
  const result = await res.json();
  return result;
}

export async function updateTurntable(id, data, token) {
  const res = await fetch(`${API_URL}/turntable/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw Error("Failed to update product");
  const result = await res.json();
  return result;
}

export async function deleteTurntable(id, token) {
  const res = await fetch(`${API_URL}/turntable/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw Error("Failed to delete product");
  return true;
}

//Turntable Menu Parts CRUD

export async function addPart(data, token) {
  const res = await fetch(`${API_URL}/turntablemenu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw Error("Failed to add part");
  const result = await res.json();
  return result;
}

export async function updatePart(id, data, token) {
  const res = await fetch(`${API_URL}/turntablemenu/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw Error("Failed to update part");
  const result = await res.json();
  return result;
}

export async function deletePart(id, token) {
  const res = await fetch(`${API_URL}/turntablemenu/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw Error("Failed to delete part");
  return true;
}
