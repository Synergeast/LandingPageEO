import React from 'react';
import CookieConsent from 'react-cookie-consent';


function CookieConsentComponent() {
    return (
        <div>
            {/* Your application content */}
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="SynergeastWebCookieConsent"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
                onAccept={(acceptedByScrolling) => {
                    if (acceptedByScrolling) {
                        // triggered if user scrolls past threshold
                        console.log("Accept was triggered by user scrolling");
                    } else {
                        console.log("Accept was triggered by clicking the Accept button");
                    }
                }}
            >
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>Our cookies are delicious.</span>
            </CookieConsent>
        </div>
    );
}

export default CookieConsentComponent;
