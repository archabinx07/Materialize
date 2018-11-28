const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Cancun": null,
        "Hawaii": null,
        "Fiji": null,
        "Ibiza": null,
        "Bora Bora": null,
        "Sydney": null,
    }
});

const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

const ss = document.querySelectorAll(".scrollspy");
M.Scrollspy.init(ss, {});
