export const send = ({ email, webhook }) => {
  try {
    webhook.send({
      text: `\n *Filecoin Education Sign Up Bot* \n\n *Email:* ${email} `,
    });
    return true;
  } catch (e) {
    return false;
  }
};
