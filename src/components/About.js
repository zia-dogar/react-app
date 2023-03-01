import React from 'react'

function About() {
  return (
    <div >
      
      <div className="container" style={{background: 'white'}}>
  <label htmlFor="formGroupExampleInput" className="form-label"><h5>Contact us.</h5><br></br>You can choose to save information about your contacts from your signed-in devices in your Google Account, including whether you contact them often. This data is used to make these contacts easier to interact with across Google services, regardless of which device you’re using.

Go to the People & Sharing section of your Google Account.
Under "Contacts," select Contact info from your devices.
Turn Save contact info from your devices on or off.
Note: This setting does not affect the saving of contact info by other Google services, like Google Contacts or Android Backup. Not all Google services save or use this data.

Delete contact info from your devices
Contact info from your devices is deleted from your Google Account when you turn the setting off. Your contacts will not be deleted from your devices.

How contact info from your devices helps you
This data helps Google recognize which contact to connect you with. For example, when you say things like "Hey Google, call Sam" to your Google Assistant or smart device, this data helps select the right contact to call.</label>
  
</div>

    </div>
  )
}

export default About
