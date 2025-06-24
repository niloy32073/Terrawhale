import axios from "axios";

export const createTeam= async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `https://new-folder-blond-seven.vercel.app/api/v1/team`,
      formData,
      config
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

// services/teacher.services.js

export const readAllTeam = async () => {
  try {
    const { data, headers } = await axios.get(
      `https://new-folder-blond-seven.vercel.app/api/v1/team`
    );

    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const updateTeam= async (token, iconId, formData) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.put(
        `https://new-folder-blond-seven.vercel.app/api/v1/team/${iconId}`,
        formData,
        config
      );
  
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  export const deleteTeam= async (token, iconId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.delete(
        `https://new-folder-blond-seven.vercel.app/api/v1/team/${iconId}`,
        config
      );
  
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  