export interface I_Call {
  id: number
  partnership_id: string
  partner_data: T_Partner
  date: string
  date_notime: string
  time: number
  from_number: string
  from_extension: string
  to_number: string
  to_extension: string
  is_skilla: number
  status: string
  record: string
  line_number: string
  in_out: number
  from_site: number
  source: string
  errors: T_Error[]
  disconnect_reason: string
  results: T_Results[]
  stages: T_Stages[]
  abuse: T_Abuse | unknown[]
  contact_name: string
  contact_company: string
  person_id: number
  person_name: string
  person_surname: string
  person_avatar: string
}

type T_Partner = {
  id: string
  name: string
  phone: string
}

type T_Abuse = {
  date: string
  person_name: string
  message: string
  support_read_status: number
  support_answer_status: number
  answers: Array<{
    message: string
    from_support: number
    support_read_status: number
    person_read_status: number
  }>
}

type T_Error = {
  title: string
}

type T_Results = {
  type: string
  title: string
  tooltip: string
}

type T_Stages = {
  person_name: string
  person_surname: string
  person_mango_phone: string
  duration: number
  disconnect_reason: string
}
