import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { FetchContext } from "./fetchContext";
const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
	const authFetch = useContext(FetchContext);

	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const { authAxios } = authFetch;
	const { allCbt, setAllCbt } = useState();
	// const fetchCourse = async () => {
	//   try {
	//     const { data } = await authAxios.get(`cbt/category`);
	//     console.log(data.data, "f");
	//     setAllCbt(data.data);
	//   } catch (error) {
	//     console.log(error.response);
	//   }
	// };

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await authAxios.get("/user");

				setUser(data.data);
				setLoading(false);
			} catch (error) {
				console.log(error.response);
			}
		};
		fetchUser();
		// fetchCourse();
	}, []);

	const onUpdate = async (credentials) => {
		const token = localStorage.getItem("token");
		try {
			const update = await axios.patch(
				`https://api.a1tutor.org/v1/user`,
				credentials,
				{
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token,
					},
				}
			);
			console.log(update.data);
			setUser(update.data.data);
			// authContext.setAuthState({
			//   token: update.access_token,
			//   userInfo: update.data,
			//   expiresAt: update.expires_in,
			// });
		} catch {
			// If response was not successful.

			console.log("error");
		}
	};
  const createGroup = async (payload) => {
    console.log(payload);
		const token = localStorage.getItem("token");
    const config = 		{
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    }
    const url = "https://api.a1tutor.org/v1/forum"
		try {
			const group = await axios.post(url	,payload,config);
			console.log(group.data);
			
			// });
		} catch {
			// If response was not successful.

			console.log("error");
		}
	};

	return (
		<Provider
			value={{
				user,
				loading,
				allCbt,
				onUpdate,
       			createGroup,
			
			}}
		>
			{children}
		</Provider>
	);
};

export { UserContext, UserProvider };
