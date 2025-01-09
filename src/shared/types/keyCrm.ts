/* eslint-disable @typescript-eslint/no-explicit-any */
export interface KeyCrm {
    source_id: number
    manager_id: number
    title: string
    status_id: number
    pipeline_id: number
    source_uuid: any
    manager_comment: any
    communicate_at: string
    utm_source: any
    utm_medium: any
    utm_campaign: any
    utm_term: any
    utm_content: any
    status_changed_at: string
    contact_id: number
    is_finished: boolean
    closed_from: any
    currency_code: string
    updated_at: string
    created_at: string
    id: number
    payments_total: number
    products_total: number
    contact: Contact
    products: CrmProduct[]
    payments: any[]
  }
  
  export interface Contact {
    id: number
    full_name: string
    email: string
    phone: string
    social_name: any
    social_id: any
    picture: any
    additional_details: any[]
    client_id: any
    deleted_at: any
    created_at: string
    updated_at: string
  }
  
  export interface CrmProduct {
    id: number
    offer_id: any
    name: string
    price: number
    quantity: number
    unit_type: string
    picture: string
    destination_id: number
    destination_type: string
    created_at: string
    updated_at: string
  }