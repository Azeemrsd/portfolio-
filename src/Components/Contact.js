import React, { Component } from "react";
export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  nameChangeHandler = event => {
    this.setState({ name: event.target.value });
  };
  emailChangeHandler = event => {
    this.setState({ email: event.target.value });
  };
  messageChangeHandler = event => {
    this.setState({ message: event.target.value });
  };
  formHandler = event => {
    event.preventDefault();
    // let { name, email, message } = this.state;
    // async function main() {
    //   const transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     auth: {
    //       user: "gladyce.kling21@ethereal.email",
    //       pass: "udCcM92yR67B82HwNz"
    //     }
    //   });
    //   let info = await transporter.sendMail({
    //     from: '"Azeem Portfolio" ', // sender address
    //     to: "azeemrsd@gmail.com, azeemrsd@yahoo.com", // list of receivers
    //     subject: "Hello you have a message from portfolio ✔", // Subject line
    //     text: `Name:${name}\n Message:${message}\n Email:${email}` // plain text body
    //   });
    //   console.log("Message sent: %s", info.messageId);
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // }
    // main().catch(console.error);

    // // Generate SMTP service account from ethereal.email
    // nodemailer.createTestAccount((err, account) => {
    //   if (err) {
    //     console.error("Failed to create a testing account. " + err.message);
    //     return process.exit(1);
    //   }

    //   console.log("Credentials obtained, sending message...");

    //   // Create a SMTP transporter object
    //   let transporter = nodemailer.createTransport({
    //     host: account.smtp.host,
    //     port: account.smtp.port,
    //     secure: account.smtp.secure,
    //     auth: {
    //       user: account.user,
    //       pass: account.pass
    //     }
    //   });

    //   // Message object
    //   let message = {
    //     from: "Sender Name <sender@example.com>",
    //     to: "azeemsrd@gmail.com ",
    //     subject: "Nodemailer is unicode friendly ✔",
    //     text: "Hello to myself!",
    //     html: "<p><b>Hello</b> to myself!</p>"
    //   };

    //   transporter.sendMail(message, (err, info) => {
    //     if (err) {
    //       console.log("Error occurred. " + err.message);
    //       return process.exit(1);
    //     }

    //     console.log("Message sent: %s", info.messageId);
    //     // Preview only available when sending through an Ethereal account
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //   });
    // });

    // var transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD
    //   }
    // });

    //   var mailOptions = {
    //     from: "ikza987@gmail.com",
    //     to: "azeemrsd@gmail.com",
    //     subject: "New message from PortFolio",
    //     text: `Name:${this.state.name}\n Email:${this.state.email}\n Message:${this.state.email}`
    //   };

    //   transporter.sendMail(mailOptions, function(error, info) {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log("Email sent: " + info.response);
    //     }
    //   });
    // };
  };
  render() {
    return (
      <div className="contact-me">
        <h1 className="text-capitalize text-center font-italic">Contact me</h1>
        <hr></hr>
        <form onSubmit={this.formHandler}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <label>Name</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="text"
                placeholder="Enter Your Name"
                onChange={this.nameChangeHandler}
                required
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <label>Email</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <input
                type="email"
                placeholder="Enter Your Email"
                onChange={this.emailChangeHandler}
                required
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <label>Message</label>
            </div>
            <div className="col-md-8 col-sm-12">
              <textarea
                placeholder="Enter Your Message"
                onChange={this.messageChangeHandler}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-send">
            Send
          </button>
        </form>
        <hr></hr>
        <h3 className="contactHeading">
          If Above doesn't work use below details to contact
        </h3>
        <hr></hr>
        <div>
          <h3>
            {" "}
            <i className="fa fa-phone" style={{ color: "purple" }}>
              &nbsp;&nbsp;
            </i>
            +91 9703924484
          </h3>
          <h3>
            <i
              className="fa fa-map-marker"
              style={{ color: "purple" }}
              aria-hidden="true"
            >
              &nbsp;&nbsp;
            </i>
            Nizamabad
          </h3>
          <h3>
            <i
              className="fa fa-envelope"
              style={{ color: "purple" }}
              aria-hidden="true"
            >
              &nbsp;&nbsp;
            </i>
            azeemrsd@gmail.com
          </h3>
        </div>
      </div>
    );
  }
}
