import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = "https://bfdcjkqkoacxnchgrnsy.supabase.co";
const SUPABASE_KEY = "sb_publishable_xY4vovF0Jh6Q3v5BeFUA4Q_w3hpG9mh";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  function afficherLogin()
  {document.getElementById("loginZone").style.display = "block";
   document.getElementById("bouttonConnexion").style.display = "none"; document.getElementById("signupZone").style.display = "none";}

  function afficherSignup()
  {document.getElementById("signupZone").style.display = "block"; document.getElementById("loginZone").style.display = "none"}

  function attemptSignup()
  {if (document.getElementById("password").value !== document.getElementById("confirmPassword").value) {document.getElementById("passwordsDoNotMatch").style.display = "block"}
   else {document.getElementById("passwordsDoNotMatch").style.display = "none"}; if (document.getElementById("nameInput").value.length > 0) {document.getElementById("nameRequired").style.display = "none"}
   else {document.getElementById("nameRequired").style.diplay = "block"}; if (document.getElementById("emailInput").checkValidity()) {document.getElementById("emailInvalid").style.display = "none";}
   else {document.getElementById("emailInvalid").style.display = "block";} if (document.getElementById("password").value === document.getElementById("confirmPassword").value && document.getElementById("nameInput").value.length > 0 && document.getElementById("emailInput").checkValidity())
   {document.getElementById("smallpictures").style.display = "block"; document.getElementById("categorybutton").style.display = "block"; document.getElementById("signupZone").style.display = "none"}}
