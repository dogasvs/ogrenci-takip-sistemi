"use server"

import { createClient } from "@/utils/supabase/server"

const defaultUserMetaData = {
    role: "user",
    firstName: "",
    lastName: "",
    profilePhoto: "",
    bio: "",
    birthDate: ""
}

export default async function signOut() {
  const supabase = createClient();
  const {error} = await supabase.auth.signOut();
  }

export async function signUp(formData) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp(
    {
      email: formData.get("email"),
      password: formData.get("password"),
      options: {
        data: {
          ...defaultUserMetaData,
          bio: "hello world",
          firstName: formData.get("firstname"),
          firstName: formData.get("lastname")
          // role: "admin" //admin eklemek istersek
        }
      }
    }
  )

  if(error) {
    console.log(error);
  }
  
}
