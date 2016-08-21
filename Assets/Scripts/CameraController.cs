using UnityEngine;
using System.Collections;

public class CameraController : MonoBehaviour {
	Transform playerTransform;
	public bool trackPlayer;

	void Start ()
	{
		playerTransform = GameObject.FindWithTag("Player").transform;
	}

	void Update ()
	{
		if (trackPlayer)
		{
			transform.position = new Vector3(
				playerTransform.position.x,
				playerTransform.position.y + 30,
				playerTransform.position.z - 30
			);
		}
	}
}
