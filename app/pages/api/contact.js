import { mailOptions, transporter } from '../../config/nodemailer';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(`Data is:`);
    console.log(data);
    // If any fields are undefined, return 400 response
    if (!data.name || !data.email || !data.subject || !data.message) {
      console.log(`Returning 400 as fields are undefined`);
      return res.status(400).json({ message: 'Bad request ' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: data.message,
        html: '<h1>Test Title</h1><p>Some body text</p>',
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      console.log(`Returning 400 as error occurred`);
      return res.status(400).json({ message: 'Bad request ' });
    }
  }

  console.log(`Returnign 400 as not POST`);
  return res.status(400).json({ message: 'Bad request ' });
};

export default handler;
