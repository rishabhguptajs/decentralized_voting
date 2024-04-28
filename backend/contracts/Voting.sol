// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    address public owner;
    //mapping(address => bool) public voters;
    mapping(string => uint256) private votesReceived;
    string[] public candidates;

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    constructor(string[] memory _candidates) {
        owner = msg.sender;
        candidates = _candidates;
    }

    // function registerVoter(address _voter) external onlyOwner {
    //    // require(!voters[_voter], "Voter already registered");
    //     voters[_voter] = true;
    // }

    function vote(string memory _candidate) external {
       // require(voters[msg.sender], "Sender is not a registered voter");
        //require(isValidCandidate(_candidate), "Invalid candidate");
        votesReceived[_candidate]++;
    }

    function totalVotesFor(string memory _candidate) external view returns (uint256) {
        require( msg.sender == owner, "Sender is not authorized");
        //require(isValidCandidate(_candidate), "Invalid candidate");
        return votesReceived[_candidate];
    }

    function winningCandidate() external view onlyOwner returns (string memory) {
        uint256 maxVotes = 0;
        string memory winner;
        for (uint256 i = 0; i < candidates.length; i++) {
            if (votesReceived[candidates[i]] > maxVotes) {
                maxVotes = votesReceived[candidates[i]];
                winner = candidates[i];
            }
        }
        return winner;
    }

    // function isValidCandidate(string memory _candidate) internal view returns (bool) {
    //     for (uint256 i = 0; i < candidates.length; i++) {
    //         if (keccak256(abi.encodePacked(candidates[i])) == keccak256(abi.encodePacked(_candidate))) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
}
