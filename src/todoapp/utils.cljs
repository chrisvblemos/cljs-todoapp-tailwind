(ns todoapp.utils
  (:require [clojure.string]))

(defn safe-random-task-uuid
  "Generates a random task UUID
  without duplicates."
  [tasks]
  (let [uuid (random-uuid)]
    (if (get-in tasks [uuid])
      (safe-random-task-uuid tasks)
      uuid)))

(defn str->date
  [date-str]
  (js/Date. date-str))

(defn compare-date
  [date other-date]
  (let [parsed-date (.setHours (str->date date) 0 0 0 0)
        parsed-other-date (.setHours (str->date other-date) 0 0 0 0)]
    (prn "comparing " parsed-date " with " parsed-other-date)
    (cond
      (< parsed-date parsed-other-date) :past
      (= parsed-date parsed-other-date) :today
      (> parsed-date parsed-other-date) :future)))

(defn get-task-status
  [{:keys [deadline is-done?]} date-today]
  (let [time-relative (compare-date deadline date-today)]
    (if is-done?
      :done
      (case time-relative
        :past :late
        :today :today
        :future :pending))))

