using UnityEngine;
using System.Collections;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Building : MonoBehaviour
{
	BuildingController buildingController;
	public GameObject canvas;
	public GameObject buyUI;
	public Text priceLabel;
	public bool isSelected;
	public bool isOwned;
	public int price;

	void Start ()
	{
		SetPriceLabel();
		buildingController = GameObject.FindWithTag("GameController").GetComponent<BuildingController>();
	}

	void OnMouseOver ()
	{
		if (!isSelected)
		{
			if (Input.GetMouseButtonDown(0))
			{
				buildingController.SetSelectedBuilding(this);
			}
		}
	}

	public void AttemptBuy ()
	{
		buildingController.AttemptBuyBuilding(this);
	}

	public void SetSelected (bool state)
	{
		isSelected = state;
		canvas.SetActive(state);
		UpdateUI();
	}

	void UpdateUI ()
	{
		if (isOwned) buyUI.SetActive(false);
		else buyUI.SetActive(true);
	}

	public void SetOwned (bool state, string owner)
	{
		isOwned = state;
		UpdateColor(owner);
		UpdateUI();
	}

	void UpdateColor (string owner)
	{
		if (owner == "player")
		{
			GetComponent<Renderer>().material.color = Color.blue;
		}
	}

	void SetPriceLabel ()
	{
		priceLabel.text = "$" + price.ToString();
	}
}
