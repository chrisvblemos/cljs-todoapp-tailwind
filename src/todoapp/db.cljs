(ns todoapp.db)

(def default-db

  {:tasks
   {"0"  {:id "0"
          :name "Wash Dogs"
          :description "They are smelly!"
          :deadline "2025-01-24"
          :is-done? true}

    "1"  {:id "1"
          :name "Interview with John"
          :description "Study Clojure!"
          :deadline "2025-04-23"
          :is-done? false}

    "2"  {:id "2"
          :name "Grocery Shopping"
          :description "Buy vegetables and fruits."
          :deadline "2025-02-10"
          :is-done? false}

    "3"  {:id "3"
          :name "Submit Report"
          :description "Complete and submit the quarterly report."
          :deadline "2025-03-15"
          :is-done? true}

    "4"  {:id "4"
          :name "Book Flight Tickets"
          :description "Book tickets for the vacation trip."
          :deadline "2025-05-05"
          :is-done? false}

    "5"  {:id "5"
          :name "Dentist Appointment"
          :description "Routine dental check-up."
          :deadline "2025-02-28"
          :is-done? true}

    "6"  {:id "6"
          :name "Team Meeting"
          :description "Monthly team sync-up meeting."
          :deadline "2025-01-30"
          :is-done? false}

    "7"  {:id "7"
          :name "Yoga Class"
          :description "Attend the evening yoga session."
          :deadline "2025-03-01"
          :is-done? true}

    "8"  {:id "8"
          :name "Car Service"
          :description "Take the car for regular maintenance."
          :deadline "2025-04-10"
          :is-done? false}

    "9"  {:id "9"
          :name "Read Book"
          :description "Finish reading 'Clojure for the Brave and True'."
          :deadline "2025-06-20"
          :is-done? true}

    "10" {:id "10"
          :name "Project Deadline"
          :description "Finalize and submit the project."
          :deadline "2025-07-15"
          :is-done? false}

    "11" {:id "11"
          :name "Birthday Party"
          :description "Organize John's birthday celebration."
          :deadline "2025-08-05"
          :is-done? true}

    "12" {:id "12"
          :name "Gym Membership Renewal"
          :description "Renew the annual gym membership."
          :deadline "2025-09-01"
          :is-done? false}

    "13" {:id "13"
          :name "Family Reunion"
          :description "Plan the annual family reunion event."
          :deadline "2025-10-10"
          :is-done? true}

    "14" {:id "14"
          :name "Update Resume"
          :description "Refresh the resume with recent experiences."
          :deadline "2025-11-20"
          :is-done? false}

    "15" {:id "15"
          :name "Volunteer Work"
          :description "Participate in the community clean-up drive."
          :deadline "2025-12-05"
          :is-done? true}

    "16" {:id "16"
          :name "Cook Dinner"
          :description "Prepare a healthy meal for the family."
          :deadline "2025-01-18"
          :is-done? false}

    "17" {:id "17"
          :name "Software Update"
          :description "Update all software and applications."
          :deadline "2025-02-22"
          :is-done? true}

    "18" {:id "18"
          :name "Garden Maintenance"
          :description "Trim the hedges and mow the lawn."
          :deadline "2025-03-12"
          :is-done? false}

    "19" {:id "19"
          :name "Photography Session"
          :description "Schedule a photoshoot for the new product line."
          :deadline "2025-04-18"
          :is-done? true}

    "20" {:id "20"
          :name "Attend Workshop"
          :description "Participate in the Clojure workshop."
          :deadline "2025-05-25"
          :is-done? false}

    "21" {:id "21"
          :name "Meditation Retreat"
          :description "Join the weekend meditation retreat."
          :deadline "2025-06-30"
          :is-done? true}

    "22" {:id "22"
          :name "Paint House"
          :description "Repaint the living room walls."
          :deadline "2025-07-20"
          :is-done? false}

    "23" {:id "23"
          :name "Learn Guitar"
          :description "Practice guitar for 30 minutes daily."
          :deadline "2025-08-15"
          :is-done? true}

    "24" {:id "24"
          :name "Organize Garage"
          :description "Clean and organize the garage space."
          :deadline "2025-09-10"
          :is-done? false}

    "25" {:id "25"
          :name "Plan Vacation"
          :description "Decide on the destination and itinerary."
          :deadline "2025-10-05"
          :is-done? true}

    "26" {:id "26"
          :name "Develop Feature"
          :description "Implement the new authentication feature."
          :deadline "2025-11-25"
          :is-done? false}

    "27" {:id "27"
          :name "Buy Groceries"
          :description "Purchase weekly groceries and supplies."
          :deadline "2025-12-12"
          :is-done? true}

    "28" {:id "28"
          :name "Carpool Arrangement"
          :description "Set up carpool schedule for the office."
          :deadline "2025-01-28"
          :is-done? false}

    "29" {:id "29"
          :name "Attend Conference"
          :description "Participate in the annual tech conference."
          :deadline "2025-02-14"
          :is-done? true}}})
