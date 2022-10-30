import React from "react";

function Font({ preferences, setPreferences }) {
    function handleChange() {

        const font = document.querySelector('input[name=fontselect]:checked').value;
        setPreferences({ ...preferences, font: font })
        console.log(preferences)


    }
    return (
        <>
            <h2>
                Which font looks the most professional?
            </h2>
            <form onChange={handleChange}>

                <div class="form-check" id="indie">
                    <input class="form-check-input" type="radio" name="fontselect" id="indieinput" value='indie' />
                    <label class="form-check-label" for="indieinput">
                        This one!
                    </label>
                </div>
                <div class="form-check" id="figtree">
                    <input class="form-check-input" type="radio" name="fontselect" id="figtreeinput" value='figtree' checked />
                    <label class="form-check-label" for="figtreeinput">
                        This one!
                    </label>
                </div>
                <div class="form-check" id="orb">
                    <input class="form-check-input" type="radio" name="fontselect" id="orbinput" value='orb' />
                    <label class="form-check-label" for="orbinput">
                        This one!
                    </label>
                </div>
            </form>
        </>
    )
}
export default Font