class Home::IndexPage < MainLayout
  def content
    puts "rendering #{context.session.get?(:state)}"
    div style: "margin-bottom: 2rem;" do
      span do
        text "state: "
      end
      text context.session.get?(:state) || ""
    end
    button type: "button", id: "set-api-state-true" do
      text "Api TRUE"
    end
    button type: "button", id: "set-api-state-false" do
      text "Api FALSE"
    end
    button type: "button", id: "set-browser-state-true" do
      text "Browser TRUE"
    end
    button type: "button", id: "set-browser-state-false" do
      text "Browser FALSE"
    end
  end
end
