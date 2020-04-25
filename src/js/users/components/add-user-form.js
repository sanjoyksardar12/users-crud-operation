import React, { useState, useCallback, useEffect } from "react";
// import
const defaultFormData = {
  name: "", email: "", address: ""
}
const AddUserForm = React.memo(({ userInfo = defaultFormData, updateUser, addUser, editingUserId }) => {
  const [formData, setFormDate] = useState(userInfo);

  useEffect(() => {
    setFormDate(userInfo);
  }, [editingUserId])

  const submitHandler = useCallback((e) => {
    e.preventDefault();
    if (editingUserId) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormDate(() => defaultFormData);
  })
  const updateExistingUser = useCallback((e) => {
    e.preventDefault();
    addUser(formData);
  })
  const updateFormData = useCallback((e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormDate((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  })

  const { name, email, address } = formData;
  return (
    <div className="form-details">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={updateFormData} value={name} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={updateFormData} value={email} />
        <label htmlFor="address">Address</label>
        <textarea type="text" name="address" id="address" onChange={updateFormData} value={address} />

        <input type="submit" value={!editingUserId ? "Create User" : "Update User"} />
      </form>

    </div>

  )
})
export default AddUserForm;
