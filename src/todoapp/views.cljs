(ns todoapp.views

  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as r]
   [todoapp.subs]
   [todoapp.utils :as utils]))

(defn status-done-component []
  [:div {:class "w-max"}
   [:div {:class "css-task-done-status-label"}
    [:span "Done"]]])

(defn status-pending-component []
  [:div {:class "w-max"}
   [:div {:class "css-task-pending-status-label"}
    [:span "Pending"]]])

(defn status-late-component []
  [:div {:class "w-max"}
   [:div {:class "css-task-late-status-label"}
    [:span "Late"]]])

(defn status-today-component []
  [:div {:class "w-max"}
   [:div {:class "css-task-today-status-label"}
    [:span "Due Today"]]])

(defn task-status-component
  [task]
  (let [status-str (utils/get-task-status task (.toLocaleString (js/Date.)))]
    (case status-str
      :late (status-late-component)
      :today (status-today-component)
      :pending (status-pending-component)
      :done (status-done-component))))

(defn task-component [{:keys [id name description deadline is-done?] :as task}]
  (prn task)
  [:tr {:class "hover:bg-slate-50 border-b border-slate-200"}
   [:td
    [:p {:class "block font-semibold text-sm text-slate-800"} name]]
   [:td
    [:p {:class "block font-light text-sm text-slate-800"} description]]
   [:td
    [:span {:class "block font-light text-sm text-slate-800"} deadline]]
   [:td
    (task-status-component task)]
   [:td
    [:button
     {:class "css-action-btn"
      :type "button"
      :on-click #(re-frame/dispatch [:remove-task-uuid id])}
     [:span {:class "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"}
      [:svg {:xmlns "http://www.w3.org/2000/svg" :view-box "0 0 512 512" :aria-hidden true :class "w-4 h-4" :fill "currentColor"}
       [:path {:class "css-trash-svg-icon"}]]]]

    (if-not (:is-done? task)
      [:button
       {:class "css-action-btn"
        :type "button"
        :on-click #(re-frame/dispatch [:set-task-is-done? id true])}
       [:span {:class "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"}
        [:svg {:xmlns "http://www.w3.org/2000/svg" :view-box "0 0 512 512" :aria-hidden true :class "w-4 h-4" :fill "currentColor"}
         [:path {:class "css-undo-task-svg-icon"}]]]]
      [:button
       {:class "css-action-btn"
        :type "button"
        :on-click #(re-frame/dispatch [:set-task-is-done? id false])}
       [:span {:class "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"}
        [:svg {:xmlns "http://www.w3.org/2000/svg" :view-box "0 0 512 512" :aria-hidden true :class "w-4 h-4" :fill "currentColor"}
         [:path {:class "css-complete-task-svg-icon"}]]]])]])

(defn add-task-component []
  (let [task-name (r/atom "")
        task-description (r/atom "")
        task-deadline (r/atom "")]
    (fn []
      [:div.add-task-form
       [:form {:class "flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-8"
               :on-submit
               (fn [e]
                 (.preventDefault e)
                 (re-frame/dispatch [:add-task @task-name @task-description @task-deadline])
                 (reset! task-name "")
                 (reset! task-description "")
                 (reset! task-deadline ""))}

        [:div.form-group
         [:label {:for "task-name" :class "block text-sm font-medium text-gray-700"}
          [:span {:class "text-black-500"} "Name"]]
         [:input {:type "text"
                  :maxLength 32
                  :id   "task-name"
                  :value @task-name
                  :on-change #(reset! task-name (-> % .-target .-value))
                  :required true
                  :placeholder "Enter task name..."}]]

        [:div.form-group
         [:label {:for "task-description" :class "block text-sm font-medium text-gray-700"}
          [:span {:class "text-black-500"} "Description (Optional)"]]
         [:input {:type "text"
                  :maxLength 200
                  :id "task-description"
                  :value @task-description
                  :on-change #(reset! task-description (-> % .-target .-value))
                  :required false
                  :placeholder "Enter task description..."}]]

        [:div.form-group
         [:label {:for "task-deadline" :class "block text-sm font-medium text-gray-700"}
          [:span {:class "text-black-500"} "Deadline"]]
         [:input {:class "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  :type "date"
                  :id "task-deadline"
                  :value @task-deadline
                  :on-change #(reset! task-deadline (-> % .-target .-value))
                  :required true}]]

        [:button {:type "submit"
                  :class "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-bold rounded-full shadow-lg h-12 w-12 flex items-center justify-center transition duration-200"
                  :aria-label "Add"} "+"]]])))

(defn before-task-table-component []
  [:div {:class "relative mx-4 mt-4 overflow-hidden text-gray-700 bg-whhite rounded-none w-full bg-clip-border"}
   [:div {:class "flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center"}
    [:div
     [:h5
      {:class "block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"}
      "Tasks"]
     [:p {:class "block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700"}
      "This is a list of tasks that are pending, late or done."]]]])

(defn tasks-table-component []
  (let [tasks (re-frame/subscribe [:tasks-sorted-by-date-asc])]
    [:div.task-table
     (if (empty? @tasks)
       [:p "No tasks for now!"]
       [:table
        [:thead {:class "bg-gray-50 sticky top-0 z-10"}
         [:tr
          [:th [:p "Name"]]
          [:th [:p "Description"]]
          [:th [:p "Due"]]
          [:th [:p "Status"]]
          [:th [:p "Actions"]]]]
        [:tbody
         (for [[task-id task-map] @tasks]
           ^{:key task-id}
           [task-component task-map])]])]))

(defn main-panel []
  [:div {:class "flex flex-col min-h-screen max-h-screen relative"}
   [:div {:class "flex-none w-1/2 mx-auto p-5"}
    [before-task-table-component]]
   [:div {:class "w-1.2 mx-auto p-5 overflow-hidden flex"}
    [:div {:class "flex-grow flex"}
     [tasks-table-component]]]
   [:div {:class "flex-none w-1.2 mx-auto p-5"}
    [add-task-component]]])

