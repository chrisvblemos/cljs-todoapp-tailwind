(ns todoapp.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :tasks
 (fn [db _]
   (:tasks db)))

(re-frame/reg-sub
 :tasks-sorted-by-date-asc
 (fn [db _]
   (let [tasks (:tasks db)]
     (sort-by (fn [[_ v]] (:deadline v))
              tasks))))
