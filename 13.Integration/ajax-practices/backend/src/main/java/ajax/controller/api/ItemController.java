package ajax.controller.api;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ajax.domain.Item;
import ajax.dto.JsonResult;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	private final List<Item> items;

	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}
	
	@PostMapping
	public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item){
		log.info("Request[POST /api, Content-Type: application/json]{}", item);
		Long maxId=Optional.ofNullable(items.isEmpty()? null: items.getFirst())
		.map((t) -> t.getId())
		.orElse(0L);
		item.setId(maxId+1);
		items.addFirst(item);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(item));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> read(@PathVariable Long id){
		log.info("Request[GET /api/{}]", id);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.stream().filter(t->t.getId()==id).findAny().orElse(null)));
	}
	
	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read(){
		log.info("Request[GET /api]");
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(JsonResult.success(items));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long id){
		log.info("Request[DELETE /api/{}]", id);
		//predicate 생략,,
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.removeIf((t)->t.getId()==id)? id : -1));
	}
	

}
