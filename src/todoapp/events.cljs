(ns todoapp.events
  (:require
   [re-frame.core :as re-frame]
   [todoapp.db :as db]
   [todoapp.utils :as utils]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :add-task
 (fn [db [_ task-name task-description task-deadline]]
   (let [tasks (:tasks db)
         uuid (utils/safe-random-task-uuid tasks)
         uuid-string (str uuid)]
     (assoc-in db [:tasks uuid-string] {:id uuid-string
                                        :name task-name
                                        :description task-description
                                        :deadline task-deadline
                                        :is-done? false}))))

(re-frame/reg-event-db
 :remove-task-uuid
 (fn [db [_ uuid]]
   (update-in db [:tasks] dissoc uuid)))

(re-frame/reg-event-db
 :set-task-is-done?
 (fn [db [_ uuid value]]
   (update-in db [:tasks uuid :is-done?] (constantly value))))

(re-frame/reg-cofx
 :now
 (fn [cofx _]
   (assoc cofx :now (js/Date.))))

