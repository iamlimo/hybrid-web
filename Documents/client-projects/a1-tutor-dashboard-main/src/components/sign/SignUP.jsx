import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../images/LOGO.svg";
import { ReactComponent as Fb } from "../../images/akar-icons_facebook-fill.svg";
import { ReactComponent as Ig } from "../../images/ant-design_instagram-filled.svg";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./sign.css";
import { publicFetch } from "../../utils/fetch";
import "react-phone-number-input/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import style from "../sign/style/spinner.module.css"
import  Spinner from "../sign/spinner"

const schema = yup
	.object()
	.shape({
		email: yup.string().email().required(),
		password: yup
			.string()
			.required("Please Enter your password")
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
			),
		category_id: yup.string().required(),
		parent_email: yup.string().notRequired(),
		first_name: yup.string().required(),
		last_name: yup.string().required(),
		phone: yup
			.string()
			.matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/im),
	})
	.required("Phone number is not valid");

const SignUP = () => {
	const [category, setCategory] = useState([]);
	const [redirect, setRedirect] = useState(false);
	// const [signupSuccess, setSignupSuccess] = useState();
	// const [signupError, setSignupError] = useState();
	
	// const [alert, setAlert] =useState(false)
	const [loading, setloading] = useState(true);

	const {
		formState,
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	// const { isSubmitting } = formState;
	const onSubmit = async (credentials) => {
		setloading(false)
		console.log(credentials);
		reset();

		try {
			const { data } = await publicFetch.post(`/user/register`, credentials);
			console.log(data);
			sessionStorage.setItem("temporaryUserdata", JSON.stringify(data));
			setloading(false)
			if (data) {
				toast.success("Registration successful, check your mail and phone number to verify");
			}
			console.log(data);
			setTimeout(() => setRedirect(true), 5000);
			setRedirect(true);
			setloading(false)

		} catch {
			// If response was not successful.
			toast.error("Your information could not be sent!");
			setloading(false)
		}
	};





	useEffect(() => {
		const fetchCategories = async () => {
			publicFetch
				.get("/utility/category")
				.then((res) => {
					const { data } = res.data;
					setCategory(data);
				})

				.catch((error) => {
					console.log(error);
				});
		};
		fetchCategories();
	}, []);

	if (redirect) {
		return (
			<Redirect
				to={{
					pathname: "/auth/verify",
				}}
			/>
		);
	}



	return (
		<div className="concon">
			<header className="header signin"></header>
			<div className="form-pos">
				<div className="form-pos-logo">
					<Logo />
				</div>
				<p>
					Welcome to A1tutor! Let’s help you get the highest grades in all your
					subjects and ace your examinations
				</p>
				<section className="form-section">
					<div className="form-wrapper">
						<div className="form-content">
							<p className="form-login-header">Register</p>
							<p className="form-login-text">
								Please put in your details below to get started
							</p>
						</div>
						<form className="form" onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control-group">
								<div className="form-control">
									<input
                    oninvalid="alert('wrong input');" 
										type="text"
										placeholder="First Name"
										id="first-name"
										required
										{...register("first_name", {
											required: "first_name is Required",
										})}
										onKeyUp={() => {
											trigger("first_name");
										}}
									/>
									{errors.first_name && (
										<small className="text-danger">
											first_name is Required
										</small>
									)}
								</div>
								<div className="form-control">
									<input
										{...register("last_name")}
										placeholder="Last Name"
										id="last-name"
										required
                    oninvalid="alert('wrong input');" 
										type="text"
									/>
									{errors.lastName && <h1>Last name is required</h1>}
								</div>
							</div>
							<div className="form-control-group">
								<div className="form-control">
									<input
										type="email"
										placeholder="Email"
										id="email"
										{...register("email")}
										required
                    oninvalid="alert('wrong input');" 
									/>
									{errors.email && "Email is required"}
								</div>

								<div className="form-control">
									<input
										id="phone"
										type="tel"
										name="phone"
										{...register("phone")}
										placeholder="Phone Number"
                   						 required
                    					oninvalid="alert('wrong input');" 
									/>
									{errors.phone && <small>phone number format is wrong</small>}
								</div>
							</div>
							<div className="form-control">
								<select
									className="form-control"
									id="acedemic-level"
									{...register("category_id")}
									required
								>
									<option value="">Academic Level</option>

									{category &&
										category.map((item) => {
											return (
												<option key={item.id} value={item.id}>
													{item.name}
												</option>
											);
										})}
									{errors.acedemicLevel && "acedemicLevel is required"}
								</select>
							</div>
							<div className="form-control">
								<input
									type="email"
									placeholder="Parent Email"
                 					 oninvalid="alert('wrong input');" 
									id="parent_email"
									{...register("parent_email")}
								/>
							</div>
							<div className="form-control">
								<input
									type="password"
									placeholder="Password"
									id="password"
									{...register("password")}
									required
                  					oninvalid="alert('wrong input');" 
								/>

								{errors.password && "password is required"}
							</div>

							<ToastContainer />
							<div className="submit-form" disabled={loading}>
								<button className="submit"  >
								
								{!loading ? <Spinner/> : "Register"}
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle opacity="0.1" cx="16" cy="16" r="16" fill="white" />
										<path
											d="M20.6308 17.131C20.5743 17.189 20.3609 17.437 20.1622 17.641C18.9971 18.924 15.9576 21.024 14.3668 21.665C14.1252 21.768 13.5144 21.986 13.188 22C12.8753 22 12.5772 21.928 12.2927 21.782C11.9381 21.578 11.6537 21.257 11.4978 20.878C11.3975 20.615 11.2416 19.828 11.2416 19.814C11.0857 18.953 11 17.554 11 16.008C11 14.535 11.0857 13.193 11.2133 12.319C11.228 12.305 11.3838 11.327 11.5543 10.992C11.867 10.38 12.4778 10 13.1315 10H13.188C13.6137 10.015 14.509 10.395 14.509 10.409C16.0141 11.051 18.9834 13.048 20.1768 14.375C20.1768 14.375 20.5129 14.716 20.659 14.929C20.887 15.235 21 15.614 21 15.993C21 16.416 20.8724 16.81 20.6308 17.131Z"
											fill="#F4F7FB"
										/>
									</svg>
								</button>
								<Link className="register" to="/student/login">
									Log in
								</Link>
							</div>
						</form>
					</div>
					<div className="form-social">
						<Fb />
						<Ig />
					</div>
				</section>
			</div>
		</div>
	);
};

export default SignUP;
