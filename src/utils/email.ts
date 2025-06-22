interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  message: string;
  courseId: string;
  courseName: string;
}

export const sendEnrollmentEmail = (data: EnrollmentData): void => {
  const { name, email, phone, message, courseName } = data;

  // Prepare the email content
  const subject = `New Enrollment: ${courseName}`;
  const body = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message || 'No message'}
    Course: ${courseName}
  `;

  // Encode the subject and body to handle special characters
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Create a mailto link
  const mailtoLink = `mailto:infoduoinsecgroups@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

  // Open the user's default email client
  window.location.href = mailtoLink;
};
