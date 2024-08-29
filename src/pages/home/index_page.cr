class Home::IndexPage < MainLayout
  def content
    puts "rendering #{context.session.get?(:state)}"
    div style: "margin-bottom: 2rem;" do
      span do
        text "state: "
      end
      text context.session.get?(:state) || ""
    end
    button type: "button", id: "set-state-true" do
      text "TRUE"
    end
    button type: "button", id: "set-state-false" do
      text "FALSE"
    end
  end
end
