import com.codingame.gameengine.runner.MultiplayerGameRunner;

public class Main {
    public static void main(String[] args) {

        MultiplayerGameRunner gameRunner = new MultiplayerGameRunner();

        // Adds as many player as you need to test your game
        gameRunner.addAgent(Agent1.class);
        gameRunner.addAgent(Agent2.class);

        // gameRunner.addAgent("python3 /home/user/player.py");

        gameRunner.start();
    }
}
