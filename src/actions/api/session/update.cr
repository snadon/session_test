class Api::Session::Update < ApiAction
  param state : Bool

  post "/api/session" do
    session.set(:state, state.to_s)
    puts "configuring: #{state}"
    json({"Api::Session::Update", session.get(:state)})
  end
end
