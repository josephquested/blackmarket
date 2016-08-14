using UnityEngine;
using System.Collections;

public class Building : MonoBehaviour
{
	GameController gameController;
	public GameObject canvas;

	void Start ()
	{
		gameController = GameObject.FindWithTag("GameController").GetComponent<GameController>();
	}

	void OnMouseOver ()
	{
		if (Input.GetMouseButtonDown(0))
		{
			gameController.SetSelectedBuilding(this);
		}
	}

	public void SetCanvasActive (bool state)
	{
		canvas.SetActive(state);
	}

	public void AttemptBuy ()
	{
		print("building attempt!");
		gameController.AttemptBuyBuilding(this);
	}
}
