class Session::Update < BrowserAction
  param state : Bool

  post "/session" do
    session.set(:state, state.to_s)
    puts "configuring: #{state}"
    json({"Browser::Session::Update", session.get(:state)})
  end
end
