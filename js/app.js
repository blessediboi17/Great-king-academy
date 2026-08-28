const form = document.getElementById('admissionForm');
const responseMsg = document.getElementById('responseMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  responseMsg.innerText = 'Submitting...';
  responseMsg.className = 'mt-4 text-center text-amber-400 font-medium text-sm';

  const studentName = document.getElementById('student_name').value;
  const classApplying = document.getElementById('class_applying').value;
  const phone = document.getElementById('phone').value;

  const { data, error } = await supabase
    .from('applications')
    .insert([
      { 
        student_name: studentName, 
        class_applying: classApplying, 
        phone: phone,
        application_reference: 'GKA-' + Math.floor(1000 + Math.random() * 9000),
        gender: 'N/A',
        program: 'Standard',
        address: 'Monrovia',
        parent_name: 'Parent/Guardian',
        relationship: 'Parent'
      }
    ]);

  if (error) {
    responseMsg.innerText = 'Error: ' + error.message;
    responseMsg.className = 'mt-4 text-center text-red-400 font-medium text-sm';
  } else {
    responseMsg.innerText = 'Application submitted successfully!';
    responseMsg.className = 'mt-4 text-center text-emerald-400 font-medium text-sm';
    form.reset();
  }
});
