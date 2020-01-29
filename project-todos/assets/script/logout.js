const logout = () => {
    localStorage.setItem("loginStatus", false);
    window.location.reload();
};
