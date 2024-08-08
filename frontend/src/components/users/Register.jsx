import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, register } from "../../actions/userAction";

const Register = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
  });

  const { name, email, password, passwordConfirm, phoneNumber } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/images/images.png");

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  //handle redirection with useEffect
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault(); //when you make any changes in the form it will make changes and get submitted, so to avoid that we are using this

    if (password !== passwordConfirm) {
      alert.error("Password don't match");
      return;
    }

    const formData = new FormData(); //this is a js inbuilt method, so whatever data you will submit, it will automatically construct it into a key and value pair (matlab object) and this object can be easily be sent using your HTTP request respond method...
    formData.set("name", name); // it will look like.. {name: Aditya}
    formData.set("email", email); //same
    formData.set("password", password); //same
    formData.set("passwordConfirm", passwordConfirm); //same
    formData.set("phoneNumber", phoneNumber); //same
    // yae saab maal vo object mein hoga as a key-value pair and send hoga

    if (avatar === "") {
      formData.set("avatar", "/images/images.png"); //matlab avatar ko default image hogi
    } else {
      formData.set("avatar", avatar); // else, agar aapne aapki image upload kiye toh vo image dikhegi in place of avatar (or) default image
    }

    dispatch(register(formData));
  };
  //filereader helps to read the content the files in the user's local computer. we are using this to access and upload the user's avatar image

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          // indicated the reading is done
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5 registration-form">
          <form
            className="shadow-lg"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <h1 className="mb-3">Register</h1>
            <div className="form-group">
              <label htmlFor="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm_field">Password Confirm</label>
              <input
                type="password"
                id="passwordConfirm_field"
                className="form-control"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber_field">Phone Number</label>
              <input
                type="number"
                id="phoneNumber_field"
                className="form-control"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="Avatar Preview"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="images/*"
                    onChange={onChange}
                  ></input>
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
